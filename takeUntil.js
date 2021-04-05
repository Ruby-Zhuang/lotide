// TEST/ASSERTION FUNCTIONS
//const eqArrays = require("./eqArrays");
//const assertArraysEqual = require("./assertArraysEqual");

// ACTUAL FUNCTION
const takeUntil = function(array, callback) {
  const results = [];

  if (!array || !callback) {
    return;
  }

  for (const element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;