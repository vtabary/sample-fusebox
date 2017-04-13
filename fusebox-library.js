const { FuseBox, TypeScriptHelpers } = require('fuse-box');

let fuse = FuseBox.init({
  homeDir: './',
  outFile: './dist/lib.js',
  package: {
    name: 'library',
  },
  globals: {
    library: '*',
  },
  plugins: [
    TypeScriptHelpers(),
  ],
});

fuse.bundle('>[src/lib/index.ts]');
