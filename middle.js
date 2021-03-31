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
    console.log("✅ Arrays Match:", actual, "===", expected);
  } else {
    console.log("🔴 Arrays Do Not Match:", actual, "!==", expected);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  let middleElements = [];
  const arrayLength = array.length;
  const middleIndex = Math.floor(arrayLength / 2);

  if (arrayLength > 2) {
    if (isEven(arrayLength)) {
      middleElements = array.slice(middleIndex - 1, middleIndex + 1);
    } else {
      middleElements = array.slice(middleIndex, middleIndex + 1);
    }
  }
  return middleElements;
};

const isEven = function(num) {
  return (num % 2 === 0);
};

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, "3", "4", 5, 6]), ["3", "4"]);