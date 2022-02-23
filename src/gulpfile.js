const gulp = require('gulp');
const { buildCSS, watchCSS } = require('./gulp-tasks/styles');
const { buildJS, watchJS } = require('./gulp-tasks/scripts');

const build = gulp.parallel(buildCSS, buildJS);
const watch = gulp.parallel(watchCSS, watchJS);

gulp.task('build:css', buildCSS);
gulp.task('build:js', buildJS);
gulp.task('build', build);
gulp.task('watch', watch);

