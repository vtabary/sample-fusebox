const { FuseBox, TypeScriptHelpers } = require('fuse-box');

let fuse = FuseBox.init({
  homeDir: './',
  outFile: './dist/main.js',
  plugins:[
    TypeScriptHelpers(),
  ],
  package: {
    name: 'project'
  },
});

fuse.bundle('>src/project/main.ts');
