// REQUIRE MODULES
const eqArrays = require("./eqArrays");

// ASSERTARRAYSEQUAL FUNCTION
const assertArraysEqual = function(actual, expected) {
  const match = eqArrays(actual, expected);
  if (match) {
    console.log("✅ Assertion Passed:", actual, "===", expected);
  } else {
    console.log("🔴 Assertion Failed:", actual, "!==", expected);
  }
};

// MODULE EXPORTS
module.exports = assertArraysEqual;