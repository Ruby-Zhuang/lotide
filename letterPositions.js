// ACTUAL FUNCTION
const letterPositions = function(sentence) {
  const results = {};

  if (!sentence) {
    return;
  }

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  delete results[" "];
  return results;
};

module.exports = letterPositions;