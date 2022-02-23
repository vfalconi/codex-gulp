# codex-gulp

My personal Gulp setup in reusable form.

Strong opinions, loosely held, throughout.

## Install

`npm install vfalconi/codex-gulp`

## Usage

After the install finishes, if you do not already have a `gulpfile` in the project root, the starter file `src/gulpfile.js` will be copied into the project root.

The default `build` and `watch` tasks look for files in the directories listed in `src/config.gulp.js` and output them to `${ENV.BUILD_DIR}/assets`.

## TODO

- support passing config into tasks somehow
