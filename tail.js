const assertEqual = require("./assertEqual");

const tail = function(array) {
  return array.slice(1);
};

// Test Case 1: Check the returned array elements
const test1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(test1.length, 2); // ensure we get back two elements
assertEqual(test1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(test1[1], "Labs"); // ensure second element is "Labs"

// Test Case 2
console.log("------");
const test2 = tail([]);
console.log(test2);
assertEqual(test2.length, 0);

// Test Case 3
console.log("------");
const test3 = tail([1]);
console.log(test3);
assertEqual(test3.length, 0);

// Test Case 4
console.log("------");
const test4 = tail([1, 2]);
console.log(test4);
assertEqual(test4.length, 1);
assertEqual(test4[0], 2);