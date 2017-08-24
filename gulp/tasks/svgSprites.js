module.exports = function (task, gulp, sitesettings, need, taskObj) {
  'use strict';

  const path = require('path');
  const fs = require('fs-extra');
  const plumber	= require('gulp-plumber');
  const location = sitesettings.location;

  const config = {
    full: true,
    log: 'debug',
    mode					: {
      css					: {			// Create a «css» sprite
        dest: '.',
        bust: false,
        render		: {
          scss		: {
            dest: '../src/icons/icons.scss',
            template: './gulp/resources/sprite.scss'
          }		// Render a Sass stylesheet
        },
        prefix: '.rc-icon-',
        sprite: 'royal-canin.sprite.svg'
      }
    },
    shape: {
      whitespace	: '-',
      spacing			: {                         // Spacing related options
        padding		: 10,                       // Padding around all shapes
        box       : 'border'                  // Padding strategy (similar to CSS `box-sizing`)
      },
      dimension		: {                         // Dimension related options
        maxWidth	: 50,                       // Max. shape width
        maxHeight	: 50,                       // Max. shape height
        precision	: 2,                        // Floating point precision
        attributes 	: false                   // Width and height attributes on embedded shapes
      }
    }
  }

  gulp.task('svgSprites', function (done) {

    fs.emptyDir('./src/icons/', function (err) {
      if (err) return console.error(err)
    });

    fs.ensureDir('./src/icons/', function (err) {
      console.log(err) // => null
      // dir has now been created, including the directory it is to be placed in
    });

    return gulp.src(path.join(__dirname, '../../' + location['rawfiles']['svgs'] + '/output/*.svg'))
      .pipe(plumber())
      .pipe(need.svgSprite(config))
      .on('error', function(error){
        console.log(error);
      })
      .pipe(gulp.dest('./dist'))
      .on('end', function () {
        console.log('Moving inline SVGs.')
        fs.copySync('./src/svgs/inline/', './dist/', {overwrite: true});
        done();
      })
  })
}
