let need = {};

need.changed = require('gulp-changed');
// Needed to compile sass to css.
need.sass = require('gulp-sass');

// Adds sass source maps.
need.sourcemaps = require('gulp-sourcemaps');
need.sassGlob = require('gulp-sass-glob');

need.reporter = require('postcss-reporter');
need.syntax_scss = require('postcss-scss');
need.stylelint   = require('stylelint');
need.combineMq = require('gulp-combine-mq');

need.postcss = require('gulp-postcss');

need.rename = require('gulp-rename');
need.gulpif = require('gulp-if');

need.colors = require('colors');

module.exports = need;