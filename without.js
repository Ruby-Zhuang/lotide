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