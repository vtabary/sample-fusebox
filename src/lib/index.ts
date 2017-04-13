import * as merge from 'lodash.merge';
import * as fetch from 'whatwg-fetch';

export const test = () => {
  console.log('library');
  console.log('fetch', fetch);
  console.log('merge', merge);
  return fetch;
}
