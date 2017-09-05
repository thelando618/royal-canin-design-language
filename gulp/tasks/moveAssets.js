module.exports = function (task, gulp, sitesettings, need, taskObj) {
  'use strict';
  const fs = require('fs-extra');

  gulp.task('moveAssets', function (done) {
    fs.copySync('./src/images/regions/', './dist/', {overwrite: true});
    done();
  });
}
