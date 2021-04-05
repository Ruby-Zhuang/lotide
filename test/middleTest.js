// REQUIRE FUNCTIONS
const assert = require('chai').assert;
const middle = require("../middle");

// TEST CODE
describe("#middle", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(middle());
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  // Happy Path
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
  
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['3', '4'] for [1, 2, '3', '4', 5, 6]", () => {
    assert.deepEqual(middle([1, 2, "3", "4", 5, 6]), ["3", "4"]);
  });
});