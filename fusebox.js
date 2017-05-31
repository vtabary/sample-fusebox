const { FuseBox, TypeScriptHelpers } = require('fuse-box');

let fuse = FuseBox.init({
  homeDir: './',
  output: './dist/$name.js',
  package: {
    name: 'project',
    main: './src/project/main',
  },
  globals: {
    project: '*',
  },
});

fuse.bundle('project')
  .instructions('>src/project/main.ts');

fuse.run();
