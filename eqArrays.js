// EQARRAYS FUNCTION
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    // Recursive Case
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false; // Only return false if arrays don't match, otherwise keep going
      }
    // Base Case
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// MODULE EXPORTS
module.exports = eqArrays;