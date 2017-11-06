var tasklist = function (task, gulp, sitesettings, need) {
    'use strict';

    var sassloc = sitesettings.location['stylessrc'] + '/' + sitesettings.location['csssource'];
    var svgloc = sitesettings.location['rawfiles']['svgs'];

    gulp.task('tasklist', function (done) {
        console.log(need.colors.inverse.red(  '                                                                                                          '));
        console.log(need.colors.inverse.red(  '    Gulp Tasks:                                                                                           '));
        console.log(need.colors.inverse.red(  '----------------------------------------------------------------------------------------------------------'));
        console.log(need.colors.inverse.white('                                                                                                          '));
        console.log(need.colors.inverse.blue( '    Gulp controller Tasks:                                                                                '));
        console.log(need.colors.inverse.white('                                                                                                          '));
        console.log(need.colors.inverse.white('    gulp dev         –  Watches for changes, compiles SASS and processes JS                               '));
        console.log(need.colors.inverse.white('    gulp prepAssets  -  Generates CSS, flags, SVG sprites, hints type and moves output to /dist           '));
        console.log(need.colors.inverse.white('    gulp prepForRelease  -  Prepares assets for release by switching path to CDN                          '));
        console.log(need.colors.inverse.white('                                                                                                          '));
        console.log(need.colors.inverse.blue( '    Gulp Settings:                                                                                        '));
        console.log(need.colors.inverse.white('                                                                                                          '));
        console.log(need.colors.inverse.white('    Master sass file:  ' + sitesettings.location['stylessrc'] + '/' + sitesettings.location['csssource'] + '                                                             '));
        console.log(need.colors.inverse.white('                                                                                                          '));
        console.log(need.colors.inverse.white('    These settings can be changed by editing gulp/gulp_settings.js                                        '));
        console.log(need.colors.inverse.white('                                                                                                          '));
        console.log(need.colors.inverse.white('                                                                                                          '));

        done();
    });
};

module.exports = tasklist;
