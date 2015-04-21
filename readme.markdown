# lockpick

> Transform hastables into arrays and back into hashtables

# Install

You can get it on npm.

```shell
npm install lockpick --save
```

```shell
bower install lockpick --save
```

# `lockpick(value, key)`

If `value` is an object, it's converted into an array. The keys in the object are assigned to a `key` property in each array element. If `value` is an array, it's converted into an object keyed by the `key` property in each object in the array.

```js
var things = {
  a: {
    b: 'c'
  },
  d: {
    b: 'e'
  }
};
var list = lockpick(things, 'key');
// <- [{ b: 'c', key: 'a' }, { b: 'e', key: 'd' }]

var more = lockpick(list, 'key');
// <- { a: { b: 'c', key: 'a' }, d: { b: 'e', key: 'd' } }
```

# Tests

Run the command below

```shell
npm test
```

# License

MIT
