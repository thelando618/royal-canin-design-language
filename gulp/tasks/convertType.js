module.exports = function (task, gulp, sitesettings, need, taskObj) {

  gulp.task('convertType', function (done) {
    // create an accumulated stream
    var fontStream = need.merge();

    var convertOptions = {
        outTypes: ['woff'],
        autoHint: true
    }

    need.fontconvert.convertFonts('src/fonts/orig', './src/fonts/hinted', function() {
    }, convertOptions);

    [['regular', 300], ['medium', 500], ['bold', 700]].forEach(function (weight) {
        fontStream.add(gulp.src(`src/fonts/hinted/dinpro-${weight[0]}/*`)
            .pipe(need.inline({name: 'RC TYPE', weight: weight[1], format: ['woff']})));

        return fontStream.pipe(need.concat('typeImport.scss')).pipe(gulp.dest('./src/scss/resources'));
    });

    done();

  });
}
