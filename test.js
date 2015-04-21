'use strict';

var test = require('tape');
var lockpick = require('./');

test('converts objects into arrays', function (t) {
  var things = {
    a: {
      b: 'c'
    },
    d: {
      b: 'e'
    }
  };
  t.deepEqual(lockpick(things, 'key'), [{ b: 'c', key: 'a' }, { b: 'e', key: 'd' }]);
  t.end();
});

test('converts objects into arrays', function (t) {
  var things = [
    { b: 'c', key: 'a' },
    { b: 'e', key: 'd' }
  ];
  t.deepEqual(lockpick(things, 'key'), { a: { b: 'c', key: 'a' }, d: { b: 'e', key: 'd' } });
  t.end();
});
