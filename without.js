// WITHOUT FUNCTION
const without = function(source, itemsToRemove) {
  const filtered = [];

  if (!source) {
    return;
  } else if (!itemsToRemove) {
    return source;
  }

  for (let i = 0; i < source.length; i++) {
    const currentItem = source[i];
    const containsItem = itemsToRemove.includes(currentItem);

    if (!containsItem) {
      filtered.push(currentItem);
    }
  }
  return filtered;
};

module.exports = without;