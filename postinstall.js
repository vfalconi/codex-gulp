const { copyFileSync, constants } = require('fs');

copyFileSync('./src/gulpfile.js', '../../gulpfile.js', constants.COPYFILE_EXCL);

