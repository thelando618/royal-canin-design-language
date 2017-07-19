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
        console.log(need.colors.inverse.white('    gulp dev         –  Watches for changes and compiles sass                                             '));
        console.log(need.colors.inverse.white('    gulp dev-mean    –  Watches for changes and compiles sass but also lints                              '));
        console.log(need.colors.inverse.white('    gulp dev-build   –  Converts SVGs, mins images                                                        '));
        console.log(need.colors.inverse.white('    gulp production  -  Compiles and builds the theme ready for deployment                                '));
        console.log(need.colors.inverse.white('                                                                                                          '));
        console.log(need.colors.inverse.blue( '    Gulp Subtasks:                                                                                        '));
        console.log(need.colors.inverse.white('                                                                                                          '));
        console.log(need.colors.inverse.white('    gulp sassdev  -  Compiles your sass and displays debugging info etc                                   '));
        console.log(need.colors.inverse.white('    gulp sassprod -  Compiles your sass without debugging info etc                                        '));
        console.log(need.colors.inverse.white('    gulp lintJS   -  Uses eslint to check your markup against D8 coding standards                         '));
        console.log(need.colors.inverse.white('    gulp lintSass -  Uses stylelint to check your markup against rules set in gulp/resources/.stylelintrc '));
        console.log(need.colors.inverse.white('    gulp iconify  -  Check folder ' + svgloc + '/ for SVGs and convert them into icons.                         '));
        console.log(need.colors.inverse.white('    gulp modernizr  - Generates a custom modernizr build.                                                 '));
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
