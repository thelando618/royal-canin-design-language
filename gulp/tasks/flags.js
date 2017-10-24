const fs = require('fs-extra');
const path = require('path');
const tap = require('gulp-tap');
const plumber	= require('gulp-plumber');


const exec = require('child_process').exec;

const rawFlagPath = './src/svgs/flags';

const flagConfig = {
  full: true,
  log: 'debug',
  mode					: {
    css					: {			// Create a «css» sprite
      dest: '.',
      bust: false,
      render		: {
        scss		: {
          dest: '../src/icons/flags.scss',
          template: './gulp/resources/sprite--flags.scss'
        }		// Render a Sass stylesheet
      },
      prefix: '.rc-flags-',
      sprite: 'royal-canin.sprite--flags.svg'
    }
  },
  shape: {
    whitespace	: '-',
    spacing			: {                         // Spacing related options
      padding		: 0,                       // Padding around all shapes
      box       : 'border'                  // Padding strategy (similar to CSS `box-sizing`)
    },
    dimension		: {                         // Dimension related options
      maxWidth	: 91,                       // Max. shape width
      maxHeight	: 64,                       // Max. shape height
      precision	: 10,                        // Floating point precision
      attributes 	: false                   // Width and height attributes on embedded shapes
    },
    transform			: ['svgo']
  },
  svg						: {							// General options for created SVG files
    dimensionAttributes	: true
  }
}

/**
 * Helper function to wrap exec for easy returning and callbacks.
 *
 * @param {String} command
 * Command to be passed on to the exec function.
 *
 * @param callback
 */
function execute(command, callback) {
  exec(command, function(error, stdout, stderr) {
    callback(stdout);
  });
}

module.exports = function (task, gulp, sitesettings, need, taskObj) {

  gulp.task('flags', function(done) {

    // Make sure the flag directory exists.
    fs.ensureDir(rawFlagPath, function (err) {
      // Empty that directory of old copies.
      fs.emptyDir(rawFlagPath, function (err) {

        execute(`git clone --depth=1 git@github.com:emcrisostomo/flags ${rawFlagPath} && rm -rf ${rawFlagPath}/.git`, function(res) {
          'use strict'

          fs.emptyDirSync(rawFlagPath + '/svgo');

          // Create the flag sprite map.
          return gulp.src(`${rawFlagPath}/svg/*.svg`)
            .pipe(need.svgmin())
            .pipe(plumber())
            .pipe(need.svgSprite(flagConfig))
            .on('error', function(error) {
              console.log(error);
            })
            .pipe(gulp.dest('./dist'))
            .on('end', function () {
              console.log('Finished creating flag sprite.');
              done();

              return gulp.src(path.join(__dirname, '../../dist/royal-canin.sprite--flags.svg'))
                .pipe(tap(function(file, t) {
                  const filePath = file.history[0].split('/')
                  const fileName = filePath.slice(filePath.length - 1);
                  const splitName = fileName[0].split('.');

                  need.svgexport.render({
                    input : [file.history[0]],
                    output: [ [`./${sitesettings.location['jsdest']}/${splitName[0]}.${splitName[1]}.png`, 'png', '80%'] ]
                  })
                }))
            })
        });

      })

    })
  })
};
