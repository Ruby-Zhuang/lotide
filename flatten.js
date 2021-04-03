const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(original) {
  let flattened = [];

  for (let i = 0; i < original.length; i++) {
    const currentElement = original[i];
    if (Array.isArray(currentElement)) {
      flattened = flattened.concat(currentElement);
    } else {
      flattened.push(currentElement);
    }
  }
  return flattened;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["1", "2", ["3", "4"], "5", ["6"]]), ["1", "2", "3", "4", "5", "6"]);
assertArraysEqual(flatten([1, 2, [3, 4, 5], 6, []]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["1", "2", [3, "4"], "5", [6]]), ["1", "2", 3, "4", "5", 6]);