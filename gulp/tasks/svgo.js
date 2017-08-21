const fs = require('fs-extra');
const path = require('path');
const tap = require('gulp-tap');

function recolour(file, t, variants, dist) {
  // Create regex for finding fills in svgs files.
  const rgx = new RegExp(/fill:.+?(?=;|")/, 'g');
  // Get the full path and split into an array.
  const filePath = file.history[0].split('/');
  // Get the file name and split that into name and extension.
  const fileName = filePath[filePath.length - 1].split('.');


  variants.forEach(function (variant, index) {
    // Convert the file binary into a string and find/replace the fill with each variant.
    let svg = file._contents.toString().replace(rgx, 'fill:' + variant.colour);

    fs.writeFileSync(dist + fileName[0] + variant.suffix + '.' + fileName[1], svg);
  });
}

module.exports = function (task, gulp, sitesettings, need, taskObj) {
  gulp.task('svgo', function(done) {

    fs.ensureDir('./src/svgs/output/', function (err) {
      fs.emptyDir('./src/svgs/output/', function (err) {
        if (err) return console.error(err)

        gulp.src(path.join(__dirname, '../../' + sitesettings.location['rawfiles']['svgs'] + '/for_colouring/**/*.svg'))
          .pipe(tap(function(file, t) {
            recolour(file, t,
              [ { suffix: "--black", colour: "#000" },
                { suffix: "--white", colour: "#fff" },
                { suffix: "--red", colour: "#E2001A" }
              ],
              './src/svgs/output/')
          })).on('data', function (file) {
          const fileList = fs.readdirSync('./src/svgs/for_colouring/');
          const filePath = file.history[0].split('/');

          if (filePath[filePath.length - 1] === fileList[fileList.length - 1]) {
            fs.copy(path.join(__dirname, '../../' + sitesettings.location['rawfiles']['svgs'] + '/singles'), path.join(__dirname, '../../' + sitesettings.location['rawfiles']['svgs'] + '/output'), function (err) {
              if (err) return console.error(err)
            })
          }
        });

        done();

      });
    });
  })
}

