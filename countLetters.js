// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// ACTUAL FUNCTION
const countLetters = function(text) {
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

// TEST CODE
console.log("---------------------");
const result1 = countLetters("LHL");
console.log(result1);
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);
console.log("---------------------");
const result2 = countLetters("lighthouse in the house");
console.log(result2);
assertEqual(result2["l"], 1);
assertEqual(result2["i"], 2);
assertEqual(result2["g"], 1);
assertEqual(result2["h"], 4);
assertEqual(result2["t"], 2);
assertEqual(result2["o"], 2);
assertEqual(result2["u"], 2);
assertEqual(result2["s"], 2);
assertEqual(result2["e"], 3);
assertEqual(result2["n"], 1);
console.log("---------------------");
const result3 = countLetters("LHl");
console.log(result3);
assertEqual(result3["L"], 1);
assertEqual(result3["H"], 1);
assertEqual(result3["l"], 1);
const result4 = countLetters("Ruby Z");
console.log(result4);
assertEqual(result4["R"], 1);
assertEqual(result4["u"], 1);
assertEqual(result4["b"], 1);
assertEqual(result4["y"], 1);
assertEqual(result4["Z"], 1);
assertEqual(result4["z"], undefined);