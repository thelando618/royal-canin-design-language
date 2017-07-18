module.exports = function (task, gulp, sitesettings, need, taskObj) {


  gulp.task('convertType', function (done) {
    // create an accumulated stream
    var fontStream = need.merge();

    [['regular', 300], ['medium', 500], ['bold', 700]].forEach(function (weight) {
      // a regular version
      fontStream.add(gulp.src(`src/fonts/din_pro_${weight[0]}.woff2`)
        .pipe(need.inline({name: 'DIN Pro', weight: weight[1], format: ['woff2']})));

      return fontStream.pipe(need.concat('typeImport.scss')).pipe(gulp.dest('./src/scss/resources'));
    });

    done();

  });
}
