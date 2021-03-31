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
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  delete results[" "];
  return results;
};

// TEST CODE
console.log("---------------------");
const result1 = letterPositions("hello");
console.log(result1);
assertArraysEqual(result1.h, [0]);
assertArraysEqual(result1.e, [1]);
assertArraysEqual(result1.l, [2, 3]);
assertArraysEqual(result1.o, [4]);
console.log("---------------------");
const result2 = letterPositions("LHL");
console.log(result2);
assertArraysEqual(result2.L, [0, 2]);
assertArraysEqual(result2.H, [1]);
console.log("---------------------");
const result3 = letterPositions("lighthouse in the house");
console.log(result3);
assertArraysEqual(result3.l, [0]);
assertArraysEqual(result3.i, [1, 11]);
assertArraysEqual(result3.g, [2]);
assertArraysEqual(result3.h, [3, 5, 15, 18]);
assertArraysEqual(result3.t, [4, 14]);
assertArraysEqual(result3.o, [6, 19]);
assertArraysEqual(result3.u, [7, 20]);
assertArraysEqual(result3.s, [8, 21]);
assertArraysEqual(result3.e, [9, 16, 22]);
assertArraysEqual(result3.n, [12]);