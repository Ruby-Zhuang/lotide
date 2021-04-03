const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  const match = eqArrays(actual, expected);
  if (match) {
    console.log("✅ Assertion Passed:", actual, "===", expected);
  } else {
    console.log("🔴 Assertion Failed:", actual, "!==", expected);
  }
};

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2]);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

module.exports = assertArraysEqual;