// HEAD FUNCTION
const head = function(array) {
  if (!Array.isArray(array)) {
    return;
  }

  if (array.length > 0) {
    return array[0];
  }

  return;
};

// MODULE EXPORTS
module.exports = head;