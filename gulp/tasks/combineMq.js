module.exports = function (task, gulp, sitesettings, need, taskObj) {

  var location = sitesettings.location;
  const plumber	= require('gulp-plumber');


  gulp.task('combineMq', function () {
    return gulp.src(location['cssdest'] + '/' + location['cssoutput'])
      .pipe(plumber())
      .pipe(need.combineMq({
        beautify: true
      }))
      .pipe(gulp.dest(location['cssdest']));
  });

}