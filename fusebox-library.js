const { FuseBox, TypeScriptHelpers } = require('fuse-box');

let fuse = FuseBox.init({
  homeDir: './',
  output: './dist/$name.js',
  package: 'library',
  sourceMaps: true,
  globals: {
    library: '*',
  },
  plugins: [
    TypeScriptHelpers(),
  ],
});

fuse.bundle('lib')
  .instructions('>[src/lib/index.ts]');

fuse.run();
