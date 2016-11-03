'use strict';

function strike(tests) {
  var success = 0;
  var failure = 0;
  tests.forEach(function (t) {
    match(t.toTest, t.testedFor, t.description) ? success++ : failure++;
  });
  console.log(success, 'succeeded;', failure, 'failed!');
}
