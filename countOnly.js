// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// ACTUAL FUNCTION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    for (const keyName in itemsToCount) {
      if (shouldCount(itemsToCount, keyName, item)) {
        results[keyName] = increaseCount(results, keyName);
      }
    }
  }
  return results;
};

const shouldCount = function(object, actualKey, keyToCheck) {
  if (actualKey === keyToCheck && object[actualKey] === true) {
    return true;
  } else {
    return false;
  }
};

const increaseCount = function(object, key) {
  if (object[key]) {
    return object[key] += 1;
  } else {
    return 1;
  }
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);