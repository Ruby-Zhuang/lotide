// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const match = eqArrays(actual, expected);
  if (match) {
    console.log("✅ Assertion Passed:", actual, "===", expected);
  } else {
    console.log("🔴 Assertion Failed:", actual, "!==", expected);
  }
};

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