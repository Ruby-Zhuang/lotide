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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

// DOESN'T PRINT ARRAYS TO SHOW DATA TYPES
// if (match) {
//   console.log(`✅ Arrays Match: ${actual} === ${expected}`);
// } else {
//   console.log(`🔴 Arrays Don't Match: ${actual} !== ${expected}`);
// }