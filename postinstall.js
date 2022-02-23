const { constants } = 'fs';
const { copyFile } = 'fs/promises';

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
try {
  copyFile('./src/gulpfile.js', '../../gulpfile.js', constants.COPYFILE_EXCL);
  console.log('gulpfile template was copied to project root');
} catch {
  console.log('existing gulpfile detected, template not copied');
}
