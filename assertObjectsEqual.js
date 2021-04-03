// TEST/ASSERTION FUNCTIONS
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const match = eqObjects(actual, expected);
  if (match) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);
 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

const dc2 = { d: ["2", 3, 4], c: "1" };
assertObjectsEqual(cd2, dc2);