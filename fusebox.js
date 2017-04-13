const { FuseBox, TypeScriptHelpers } = require('fuse-box');

let fuse = FuseBox.init({
  homeDir: './',
  outFile: './dist/main.js',
  plugins:[
    TypeScriptHelpers(),
  ],
  globals: {
    project: '*',
  },
  package: {
    name: 'project'
  },
});

fuse.bundle('>src/project/main.ts');
