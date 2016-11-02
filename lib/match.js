'use strict';

function match(a, b, desc) {
  var out;
  if (a === b) {
    out = true;
  } else {
    out = false;
    if (console) {
      console.log('match failed: ', desc, ':', a, '(toTest) is not (testedFor)', b);
    }
  }
  return out;
}

