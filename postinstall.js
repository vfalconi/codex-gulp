const { constants } = require('fs');
const { copyFile } = require('fs/promises');
const templateFiles = [
	[ './src/gulpfile.js', '../../gulpfile.js' ],
	[ './src/env', '../../.env' ],
];

templateFiles.forEach(templateFile => {
	const [ src, dest ] = templateFile;
	copyFile(src, dest, constants.COPYFILE_EXCL)
		.then(result => console.log(`file template (${src}) was copied to ${dest}`))
		.catch(e => console.log(`existing file (${dest}) detected, template (${src}) not copied`));
});
