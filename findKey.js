// ACTUAL FUNCTION
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

module.exports = findKey;