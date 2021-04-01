// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// ACTUAL FUNCTION
// It should scan the object and return the first key for which the callback returns a truthy value.
// If no key is found, then it should return undefined.
const findKey = function(array, callback) {
  let result;

  for (const key in array) {
    if (callback(array[key])) {
      result = key;
      return result;
    }
  }

  return result;
};

// TEST CODE
const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertEqual(findKey(data1, x => x.stars === 2), "noma");
assertEqual(findKey(data1, x => x.stars === 3), "Akaleri");
assertEqual(findKey(data1, x => x.stars > 2), "Akaleri");
assertEqual(findKey(data1, x => x.stars === 4), undefined);