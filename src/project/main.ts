import * as fetch from 'whatwg-fetch';
import * as lib from '../../dist/lib';
import { test } from '../../dist/lib';

console.log('lib', lib);
console.log('fetch', test() == fetch);

declare var phantom;
if (typeof phantom !== 'undefined') {
  phantom.exit();
}
