const fs = require('fs-extra');
const path = require('path');
const tap = require('gulp-tap');


module.exports = function (task, gulp, sitesettings, need, taskObj) {

  gulp.task('svg2png', function(done) {
    gulp.src(path.join(__dirname, '../../' + sitesettings.location['rawfiles']['svgs'] + '/inline/**/*.svg'))
      .pipe(tap(function(file, t) {
        const filePath = file.history[0].split('/')
        const fileName = filePath.slice(filePath.length - 1);
        const splitName = fileName[0].split('.')

        need.svgexport.render({
          input : [file.history[0]],
          output: [ [`./${sitesettings.location['jsdest']}/${splitName[0]}.png`, 'png', '80%'] ]
        })
      }))
      .on('end', function (res) {
        done();
      })
  });
}
