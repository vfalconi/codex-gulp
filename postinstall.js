import { constants } from 'fs';
import { copyFile } from 'fs/promises';

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
try {
  await copyFile('./src/gulpfile.js', '../../gulpfile.js', constants.COPYFILE_EXCL);
  console.log('source.txt was copied to destination.txt');
} catch {
  console.log('The file could not be copied');
}
