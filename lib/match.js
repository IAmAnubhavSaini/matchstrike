'use strict';

function match(a, b, desc) {
  var out = a === b ? true : false;
  if (console && !out) {
    console.log('match failed: ', desc, ':', a, '(toTest) is not (testedFor)', b);
  }
  return out;
}
