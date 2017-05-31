const { FuseBox, TypeScriptHelpers } = require('fuse-box');

let fuse = FuseBox.init({
  homeDir: './',
  output: './dist/$name.js',
  package: {
    name: 'library',
    main: './src/lib/index',
  },
  globals: {
    library: '*',
  },
});

fuse.bundle('lib')
  .instructions('>[src/lib/index.ts]');

fuse.run();
