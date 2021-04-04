const assertEqual = require("./assertEqual");

const head = function(array) {
  if (array.length > 0) {
    return array[0];
  }
  return;
};

//TESTS
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([2]), 2);