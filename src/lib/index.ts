// import * as merge from 'lodash.merge';
// import * as fetch from 'whatwg-fetch';

declare const require;
declare const console;

// Require in function in order to return the test function even if the requirements are not found
export const test = () => {
  try {
    console.log('--- library ---');
    console.log('--- fetch => ', require('whatwg-fetch'));
    console.log('--- merge => ', require('lodash.merge'));
    return require('whatwg-fetch');
  } catch(e) {
    console.log('Error: ', e);
    return undefined;
  }
}
