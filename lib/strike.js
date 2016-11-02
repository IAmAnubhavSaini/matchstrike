'use strict';

function strike(tests) {
  var success = 0;
  var failure = 0;
  tests.forEach(function (t) {
    var res = match(t.toTest, t.testedFor, t.description);
    if (res) {
      success++;
    } else {
      failure++;
    }
  });
  console.log(success, 'succeeded;', failure, 'failed!');
}

