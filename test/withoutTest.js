// REQUIRE FUNCTIONS
const assert = require('chai').assert;
const without = require("../without");

// TEST CODE
describe("#without", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(without());
  });
  
  it("returns [2, 3] for [2, 3] with no items to remove", () => {
    const array = [2, 3];
    const actual = without(array, []);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it("returns [2, 3] for [2, 3] removing [1]", () => {
    const array = [2, 3];
    const actual = without(array, [1]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });

  it("returns [] for [2, 3] removing [2, 3]", () => {
    const array = [2, 3];
    const actual = without(array, [2, 3]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  // Happy Path
  it("returns ['1', '2'] for ['1', '2', '3'] removing [1, 2, '3']", () => {
    const array = ["1", "2", "3"];
    const actual = without(array, [1, 2, "3"]);
    const expected = ["1", "2"];
    assert.deepEqual(actual, expected);
  });
});
