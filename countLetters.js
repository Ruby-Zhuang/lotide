// ACTUAL FUNCTION
const countLetters = function(text) {
  if (!text) {
    return;
  }

  const result = {};
  const noSpaces = text.split(" ").join("");

  for (const letter of noSpaces) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;