// FLATTEN FUNCTION
const flatten = function(original) {
  let flattened = [];

  if (!original) {
    return;
  }

  for (let i = 0; i < original.length; i++) {
    const currentElement = original[i];
    if (Array.isArray(currentElement)) {
      flattened = flattened.concat(currentElement);
    } else {
      flattened.push(currentElement);
    }
  }
  return flattened;
};

module.exports = flatten;