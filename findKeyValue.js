// ACTUAL FUNCTION
const findKeyValue = function(object, value) {
  if (!object) {
    return;
  }

  let key;
  const existingKeys = Object.keys(object);

  for (const currentKey of existingKeys) {
    if (object[currentKey] === value) {
      key = currentKey;
    }
  }
  return key;
};

module.exports = findKeyValue;