const fs = require('fs-extra');
const path = require('path');
const tap = require('gulp-tap');

function recolour(file, t, variants, dist) {
  // Create regex for finding fills in svgs files.
  const rgx = new RegExp(/fill.+?(?=;|")/, 'g');
  // Get the full path and split into an array.
  const filePath = file.history[0].split('/');
  // Get the file name and split that into name and extension.
  const fileName = filePath[filePath.length - 1].split('.');

  variants.forEach(function (variant, index) {
    // Convert the file binary into a string and find/replace the fill with each variant.
    const svg = file._contents.toString().replace(rgx, 'fill:' + variant.colour);

    fs.writeFile(dist + fileName[0] + variant.suffix + '.' + fileName[1], svg, function(err) {
      if (err) throw err;
    });
  });
}

module.exports = function (task, gulp, sitesettings, need, taskObj) {
  gulp.task('svgo', function(done) {

    fs.emptyDir('./src/svgs/coloured/', function (err) {
      if (err) return console.error(err)
    });

    fs.ensureDir('./src/svgs/coloured/', function (err) {
    // dir has now been created, including the directory it is to be placed in
  });

    gulp.src(path.join(__dirname, '../../' + sitesettings.location['rawfiles']['svgs'] + '/RAW/**/*.svg'))
      .pipe(tap(function(file, t) {
        recolour(file, t,
          [ { suffix: "--red", colour: "#fff" },
            { suffix: "--black", colour: "#000" },
            { suffix: "--grey", colour: "#0ff" }
          ],
          './src/svgs/coloured/')
      })).on('data', function (file) {
      const fileList = fs.readdirSync('./src/svgs/RAW/');
      const filePath = file.history[0].split('/');

      if (filePath[filePath.length - 1] === fileList[fileList.length - 1]) {
        done();
      }
    });
  })
}

