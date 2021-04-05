// REQUIRE FUNCTIONS
const assert = require('chai').assert;
const takeUntil = require("../takeUntil");

// TEST CODE
describe("#takeUntil", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(takeUntil());
  });

  // Happy Path
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5] to take values until < 0", () => {
    const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const actual = takeUntil(array, x => x < 0);
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(actual, expected);
  });

  it("returns ['I've', 'been', 'to', 'Hollywood'] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] to take values until ','", () => {
    const array = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const actual = takeUntil(array, x => x === ',');
    const expected = ["I've", "been", "to", "Hollywood"];
    assert.deepEqual(actual, expected);
  });
});