const gulp = require('gulp');
const { buildJS, watchJS, buildCSS, watchCSS } = require('codex-gulp');

const build = gulp.parallel(buildCSS, buildJS);
const watch = gulp.parallel(watchCSS, watchJS);

gulp.task('build:css', buildCSS);
gulp.task('build:js', buildJS);
gulp.task('build', build);
gulp.task('watch', watch);

