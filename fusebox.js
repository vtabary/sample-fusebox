const { FuseBox, TypeScriptHelpers, JSONPlugin } = require('fuse-box');

let fuse = FuseBox.init({
  homeDir: './src',
  outFile: './dist/main.js',
  plugins:[
    TypeScriptHelpers(),
  ],
});

fuse.bundle('>main.ts +lib/**/*.spec.ts');
// fuse.bundle('>main.ts');
