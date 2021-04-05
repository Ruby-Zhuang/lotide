// REQUIRE FUNCTIONS
const assert = require('chai').assert;
const map = require("../map");

// TEST CODE
describe("#map", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(map());
  });

  // Happy Path
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const array = ["ground", "control", "to", "major", "tom"];
    const actual = map(array, word => word[0]);
    const expected = ["g", "c", "t", "m", "t"];
    assert.deepEqual(actual, expected);
  });

  it("returns [2, 4, 6, 8] for [1, 2, 3, 4]", () => {
    const array = [1, 2, 3, 4];
    const actual = map(array, num => num * 2);
    const expected = [2, 4, 6, 8];
    assert.deepEqual(actual, expected);
  });

  it("returns [false, true, false, true] for [1, 2, 3, 4]", () => {
    const array = [1, 2, 3, 4];
    const actual = map(array, num => num % 2 === 0);
    const expected = [false, true, false, true];
    assert.deepEqual(actual, expected);
  });
});