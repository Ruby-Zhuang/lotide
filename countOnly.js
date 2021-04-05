// ACTUAL FUNCTION
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  if (!allItems) {
    return;
  }

  for (const item of allItems) {
    if (itemsToCount[item]) {     // If item in allItems array is a key in the itemsToCount and is set to true
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;