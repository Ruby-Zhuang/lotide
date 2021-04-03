const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  const filtered = [];

  for (let i = 0; i < source.length; i++) {
    const currentItem = source[i];
    const containsItem = itemsToRemove.includes(currentItem);

    if (!containsItem) {
      filtered.push(currentItem);
    }
  }
  return filtered;
};

// TEST CASE TO CHECK IF ORIGINAL SOURCE ARRAY IS UNALTERED
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
assertArraysEqual(without(["1", "2", 3], [1, 2, "3"]), ["1", "2", 3]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);