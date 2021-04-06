// REQUIRE FUNCTIONS
const eqArrays = require("./eqArrays");

// ACTUAL FUNCTION
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

module.exports = eqObjects;