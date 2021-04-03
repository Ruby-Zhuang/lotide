const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
// assertEqual(1, 3);
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");

module.exports = assertEqual;