// MIDDLE FUNCTION
const middle = function(array) {
  if (!Array.isArray(array)) {
    return;
  }

  let middleElements = [];
  const arrayLength = array.length;
  const middleIndex = Math.floor(arrayLength / 2);

  if (arrayLength > 2) {
    if (isEven(arrayLength)) {
      middleElements = array.slice(middleIndex - 1, middleIndex + 1);
    } else {
      middleElements = array.slice(middleIndex, middleIndex + 1);
    }
  }
  return middleElements;
};

const isEven = function(num) {
  return (num % 2 === 0);
};

// MODULE EXPORTS
module.exports = middle;