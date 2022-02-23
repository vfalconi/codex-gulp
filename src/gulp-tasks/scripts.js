require('dotenv').config();
const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const output = `${process.env.BUILD_DIR}assets/`;
const { scriptsPaths } = require('../config.gulp.js');

const buildScripts = () => {
	return gulp.src(scriptsPaths)
	.pipe(uglify())
	.pipe(gulp.dest(output))
};

const buildJS = gulp.parallel(buildScripts);

const watchScripts = () => gulp.watch(scriptsPaths, buildScripts);

const watchJS = watchScripts;

module.exports = {
	buildJS,
	watchJS
}
