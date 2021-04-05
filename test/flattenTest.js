// REQUIRE FUNCTIONS
const assert = require('chai').assert;
const flatten = require("../flatten");

// TEST CODE
describe("#flatten", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(flatten());
  });

  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });

  // Happy Path
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const array = [1, 2, [3, 4], 5, [6]];
    const actual = flatten(array);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected);
  });

  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4, 5], 6, []]", () => {
    const array = [1, 2, [3, 4, 5], 6, []];
    const actual = flatten(array);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected);
  });

  it("returns ['1', '2', 3, '4', '5', 6] for ['1', '2', [3, '4'], '5', [6]]", () => {
    const array = ["1", "2", [3, "4"], "5", [6]];
    const actual = flatten(array);
    const expected = ["1", "2", 3, "4", "5", 6];
    assert.deepEqual(actual, expected);
  });
});