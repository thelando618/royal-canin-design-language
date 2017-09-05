var need = {};

need.path = require('path');
need.colors = require('colors');

need.changed = require('gulp-changed');
// Needed to compile sass to css.
need.sass = require('gulp-sass');

// Adds sass source maps.
need.sourcemaps = require('gulp-sourcemaps');
need.sassGlob = require('gulp-sass-glob');
need.merge  = require('merge-stream');

need.reporter = require('postcss-reporter');
need.syntax_scss = require('postcss-scss');
need.stylelint   = require('stylelint');
need.combineMq = require('gulp-combine-mq');

need.postcss = require('gulp-postcss');

need.rename = require('gulp-rename');
need.gulpif = require('gulp-if');

need.eslint = require('gulp-eslint');

need.concat = require('gulp-concat');
need.uglify = require('gulp-uglify');

need.inline = require('gulp-inline-fonts');
need.fontconvert = require('fontconvert-tool');

need.svgSprite = require('gulp-svg-sprite');
need.recolorSvg = require('gulp-recolor-svg');
need.svgmin = require('gulp-svgmin');
need.svgexport = require('svgexport');

need.replace = require('gulp-replace');

module.exports = need;