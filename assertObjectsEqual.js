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

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    const currentValue1 = object1[key];
    const currentValue2 = object2[key];

    if (Array.isArray(currentValue1) && Array.isArray(currentValue2)) {
      if (!eqArrays(currentValue1, currentValue2)) {
        return false;
      }
    } else if (currentValue1 !== currentValue2) {
      return false;
    }
  }
  return true;
};

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