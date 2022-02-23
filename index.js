const gulpfile = require('./src/gulpfile');
const gulpConfig = require('./src/config.gulp.js');
const scriptTasks = require('./src/gulp-tasks/scripts');
const styleTasks = require('./src/gulp-tasks/styles');

module.exports = {
	gulpfile,
	gulpConfig,
	...scriptTasks,
	...styleTasks,
};
