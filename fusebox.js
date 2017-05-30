const { FuseBox, TypeScriptHelpers } = require('fuse-box');

let fuse = FuseBox.init({
  homeDir: './',
  output: './dist/$name.js',
  package: 'project',
  sourceMaps: true,
  globals: {
    project: '*',
  },
  plugins: [
    TypeScriptHelpers(),
  ],
});

fuse.bundle('project')
  .instructions('>src/project/main.ts');

fuse.run();
