module.exports = function (task, gulp, sitesettings, need, taskObj) {
  'use strict'

  const fs = require('fs');
  const location = sitesettings.location;

  gulp.task('fileRestructure', function (done) {

    const files = [
    {
      name: '*',
      path: './src/icons/css/svg',
      targetPath: './' + location['imgdest'] + '/' + location['imgoutput'] + '/'
    }
    ];


    files.forEach(function (file) {

      if (file.name === '*') {
        fs.readdir(file.path, (err, getFiles) => {
          console.log(file.path);
          console.log(getFiles);
          getFiles.forEach(function (theFile) {
            fs.rename(file.path + theFile , file.targetPath + theFile);
          })
        });
      }


    });

  });

};
