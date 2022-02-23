const { constants } = 'fs';
const { copyFile } = 'fs/promises';

(async () => {
  try {
    await copyFile('./src/gulpfile.js', '../../gulpfile.js', constants.COPYFILE_EXCL);
    console.log('gulpfile template was copied to project root');
  } catch {
    console.log('existing gulpfile detected, template not copied');
  }
})();
