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

If `value` is an object, it's converted into an array. Each property in the `value` object gets assigned a property named `key` equal to the key the value was pulled from. This is easier to say visually:

```js
var things = {
  'toys-r-us': { value: 'mild' },
  'barbie': { value: 'none' }
};
lockpick(things, 'provider')
// <- [
//  { provider: 'toys-r-us', value: 'mild' },
//  { provider: 'barbie', value: 'none' }
// ]
```

If `value` is an array, it's converted into an object keyed by the `key` property in each object within the array.

```js
var things = [
  { provider: 'toys-r-us', value: 'mild' },
  { provider: 'barbie', value: 'none' }
];
lockpick(things, 'provider')
// <- {
//  'toys-r-us': { provider: 'toys-r-us', value: 'mild' },
//  'barbie': { provider: 'barbie', value: 'none' }
// }
```

# Tests

Run the command below

```shell
npm test
```

# License

MIT
