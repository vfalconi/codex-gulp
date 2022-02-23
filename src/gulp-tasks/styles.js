require('dotenv').config();
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { sassOpts, sassGlobs } = require('../config.gulp.js');
const output = `${process.env.BUILD_DIR}assets/`;

const buildMainStyles = () => {
	return gulp.src(sassGlobs)
		.pipe(sass.sync(sassOpts).on('error', sass.logError))
		.pipe(gulp.dest(output));
};

const watchCSS = () => gulp.watch(sassGlobs, buildMainStyles);

const buildCSS = buildMainStyles;

module.exports = {
	buildCSS,
	watchCSS,
};
