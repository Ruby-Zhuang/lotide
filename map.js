// TEST/ASSERTION FUNCTIONS
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// ACTUAL FUNCTION
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// TEST CODE
const test1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(test1, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const test2 = [1, 2, 3, 4];
const results2 = map(test2, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8]);

const test3 = [1, 2, 3, 4];
const results3 = map(test3, num => num % 2 === 0);
assertArraysEqual(results3, [false, true, false, true]);