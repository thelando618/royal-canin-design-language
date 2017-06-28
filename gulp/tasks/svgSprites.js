module.exports = function (task, gulp, sitesettings, need, taskObj) {
  'use strict';

  const path = require('path');
  const fs = require('fs');
  const location = sitesettings.location;

  const config = {
    log: true,
    mode					: {
      css					: {			// Create a «css» sprite
        render			: {
          scss		: {
            dest: 'icons.scss'
          }		// Render a Sass stylesheet
        },
        prefix: '.'
      }
    },
    shape: {
      whitespace	: '-',
      spacing			: {                         // Spacing related options
        padding		: 0,                        // Padding around all shapes
        box         : 'content'                 // Padding strategy (similar to CSS `box-sizing`)
      },
      dimension		: {                         // Dimension related options
        maxWidth	: 50,                     // Max. shape width
        maxHeight	: 50,                     // Max. shape height
        precision	: 2,                        // Floating point precision
        attributes 	: false,                    // Width and height attributes on embedded shapes
      }
    },
  }

  gulp.task('svgSprites', function (done) {
    gulp.src(path.join(__dirname, '../../' + location['rawfiles']['svgs'] + '**/*.svg'))
      .pipe(need.svgSprite(config))
      .pipe(gulp.dest('./src/icons/'))
      .on('end', function () {

      });

    done();


})
}
