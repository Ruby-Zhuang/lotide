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
    console.log("✅ Arrays Match:", actual, "===", expected);
  } else {
    console.log("🔴 Arrays Do Not Match:", actual, "!==", expected);
  }
};

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