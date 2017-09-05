module.exports = function (task, gulp, sitesettings, need, taskObj) {
  'use strict';

  const exec = require('child_process').exec;

  /**
   * Helper function to wrap exec for easy returning and callbacks.
   *
   * @param {String} command
   * Command to be passed on to the exec function.
   *
   * @param callback
   */
  function execute(command, callback) {
    exec(command, function(error, stdout, stderr){
      callback(stdout);
    });
  }

  const taskDetails = taskObj[global.process.argv[2]],
    enableSassLint = taskDetails.linting.testSass,
    env = taskObj[global.process.argv[2]]['env'],
    location = sitesettings.location;

  const sassOptions = {
    includePaths: [
      'node_modules/susy/sass',
      'node_modules/normalize.css',
      'node_modules/choices.js/assets/styles/scss',
      'node_modules/pikaday/scss',
      'node_modules/tiny-slider/dist',
      'node_modules/tippy.js/dist'
    ],
    precision: 3,
    outputStyle: 'expanded'
  };

  const sassOptionsMin = {
    includePaths: [
      'node_modules/normalize.css',
      'node_modules/choices.js/assets/styles/scss'
    ],
    precision: 3,
    outputStyle: 'compressed'
  };

  const processors = [
    need.stylelint(location.linting.sass),
    need.reporter({
      clearMessages: true,
      throwError: true
    })
  ];

  gulp.task('sass', function (done) {

    let version = null;

    var getVersion = new Promise(function (resolve, reject) {
      // If we're about to do a release make sure the version number is passed for use in url string replacements.
      if (taskObj[global.process.argv[2]]['env'] === 'production') {
        execute(`git describe --exact-match --tags $(git log -n1 --pretty='%h')`, function(res) {
          version = res.slice(3).replace(/\./g, '-').replace(/\n/g, '');
          resolve(version);
        })
      }
      else {
        resolve(null);
      }
    });

    getVersion.then(function (version) {
      return gulp.src(location['stylessrc'] + '/' + location['csssource'])
        .pipe(need.sassGlob())
        .pipe(need.changed(location['csssource']))
        .pipe(need.gulpif(enableSassLint, need.postcss(processors, {syntax: need.syntax_scss})))
        .pipe(need.sass(sassOptions))
        .pipe(need.rename(location['cssoutput']))
        // ToDo: Find a nicer way to replace image urls.
        .pipe(need.gulpif(env === 'production', need.replace(`url("royal-canin.sprite.svg")`, `url("https://d3moonnr9fkxfg.cloudfront.net/royal-canin.sprite.svg?v=${version}")`)))
        .pipe(need.gulpif(env === 'production', need.replace(`url("africa.png")`, `url("https://d3moonnr9fkxfg.cloudfront.net/africa.png?v=${version}")`)))
        .pipe(need.gulpif(env === 'production', need.replace(`url("asia.png")`, `url("https://d3moonnr9fkxfg.cloudfront.net/asia.png?v=${version}")`)))
        .pipe(need.gulpif(env === 'production', need.replace(`url("europe.png")`, `url("https://d3moonnr9fkxfg.cloudfront.net/europe.png?v=${version}")`)))
        .pipe(need.gulpif(env === 'production', need.replace(`url("north-america.png")`, `url("https://d3moonnr9fkxfg.cloudfront.net/north-america.png?v=${version}")`)))
        .pipe(need.gulpif(env === 'production', need.replace(`url("oceania.png")`, `url("https://d3moonnr9fkxfg.cloudfront.net/oceania.png?v=${version}")`)))
        .pipe(need.gulpif(env === 'production', need.replace(`url("south-america.png")`, `url("https://d3moonnr9fkxfg.cloudfront.net/south-america.png?v=${version}")`)))
        .pipe(gulp.dest(location['cssdest']))
        .pipe(need.sass(sassOptionsMin))
        .pipe(need.rename(
          function (path) {
            path.basename += ".min.";
            path.extname = "css"
          }))
        .pipe(gulp.dest(location['cssdest']))
        .on('end', function () {
          console.log(need.colors.inverse.green('----------- DEV sass files changed -----------'));
          done();
        });

    });
  });
};
