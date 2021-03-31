// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// ACTUAL FUNCTION
const findKeyByValue = function(object, value) {
  let key;
  const existingKeys = Object.keys(object);

  for (const currentKey of existingKeys) {
    if (object[currentKey] === value) {
      key = currentKey;
    }
  }
  return key;
};

// TEST CODE
const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  romance: ""
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), "romance");
assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), undefined);