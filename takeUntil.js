// TEST/ASSERTION FUNCTIONS
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// ACTUAL FUNCTION
// The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  const results = [];

  for (const element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      return results;
    }
  }
  return results;
};

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---------------');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log('---------------');
const results3 = takeUntil(data1, x => x > 6);
assertArraysEqual(results3, [1, 2, 5]);

console.log('---------------');
const results4 = takeUntil(data2, x => x.length > 8);
assertArraysEqual(results4, ["I've", "been", "to"]);