module.exports = function (task, gulp, sitesettings, need, taskObj) {
  'use strict';

  const rules = need.path.join(__dirname, '../resources/.eslintrc');
  const location = sitesettings.location;
  let js = location['js-dependencies']

  js.push('src/js/**/*.js');

  gulp.task('jsProcessing', function () {
    return gulp.src(js)
      .pipe(need.eslint({configFile: rules}))
      .pipe(need.eslint.formatEach('compact', process.stderr))
      .pipe(need.concat(location['jsoutput']))
      .pipe(gulp.dest(location['jsdest']))
      .pipe(need.uglify())
      .pipe(need.rename(location['jsoutput-min']))
      .pipe(gulp.dest(location['jsdest']));

  });
};