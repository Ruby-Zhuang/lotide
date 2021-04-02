// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

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

// ACTUAL FUNCTION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    const currentValue1 = object1[key];
    const currentValue2 = object2[key];

    // Check if objects are arrays
    if (Array.isArray(currentValue1) && Array.isArray(currentValue2)) {
      if (!eqArrays(currentValue1, currentValue2)) {
        return false;
      }
    // Recursive case if values are objects (but not arrays)
    } else if ((typeof currentValue1 === "object") && (typeof currentValue2 === "object")) {
      if (!eqObjects(currentValue1, currentValue2)) {
        return false;
      }
    // Base case
    } else if (currentValue1 !== currentValue2) {
      return false;
    }
  }
  return true;
};

// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const abd = { a: "1", b: "2", d: "3" };
// assertEqual(eqObjects(abc, abd), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// const dc2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd2, dc2), true);

// TEST CODE FOR RECURSIVE IMPLEMENTATION
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { z: 1 }, b: ["2", 3, 4] }, { a: { z: 1 }, b: ["2", 3, 4]}), true);
assertEqual(eqObjects({ a: { z: {y: 1} }, b: 2 }, { a: { z: {y: 1} }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: {y: 1} }, b: 2 }, { a: { z: {y: 2} }, b: 2 }), false);
assertEqual(eqObjects({ a: { z: {y: [1]}}, b: ["2", 3, 4] }, { a: { z: {y: [1]}}, b: ["2", 3, 4] }), true);
assertEqual(eqObjects({ a: { z: {y: {z: 1}}}, b: ["2", 3, 4] }, { a: { z: {y: {z: 1}}}, b: ["2", 3, 4] }), true);