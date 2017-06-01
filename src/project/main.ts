console.log('*** project *** ');
import * as fetch from 'whatwg-fetch';
console.log('*** import whatwg-fetch => ', (fetch !== undefined? 'found' : 'not found'));
import * as lib from '../../dist/lib';
console.log('*** import lib => ', (lib !== undefined? 'found' : 'not found'));
import { test } from '../../dist/lib';
console.log('*** import test function => ', (test !== undefined? 'found' : 'not found'));


console.log('*** whatwg-fetch should be the same in both files => ', test() === fetch);

declare var phantom;
if (typeof phantom !== 'undefined') {
  phantom.exit();
}
