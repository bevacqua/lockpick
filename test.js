'use strict';

var test = require('tape');
var lockpick = require('./');

test('converts objects into arrays', function (t) {
  var things = {
    'toys-r-us': { value: 'mild' },
    'barbie': { value: 'none' }
  };
  t.deepEqual(lockpick(things, 'provider'), [
    { provider: 'toys-r-us', value: 'mild' },
    { provider: 'barbie', value: 'none' }
  ]);
  t.end();
});

test('converts objects into arrays', function (t) {
  var things = [
    { provider: 'toys-r-us', value: 'mild' },
    { provider: 'barbie', value: 'none' }
  ];
  t.deepEqual(lockpick(things, 'provider'), {
    'toys-r-us': { provider: 'toys-r-us', value: 'mild' },
    'barbie': { provider: 'barbie', value: 'none' }
  });
  t.end();
});
