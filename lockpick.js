'use strict';

function lockpick (input, key) {
  if (Array.isArray(input)) {
    return input.reduce(intoObject, {});
  }
  return Object.keys(input).reduce(intoArray, []);

  function intoObject (result, item) {
    result[item[key]] = item;
    return result;
  }

  function intoArray (result, thing) {
    input[thing][key] = thing;
    result.push(input[thing]);
    return result;
  }
}

module.exports = lockpick;
