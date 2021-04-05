// ACTUAL FUNCTION
const map = function(array, callback) {
  const results = [];

  if (!array || !callback) {
    return;
  }

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;