// REQUIRE MODULES
const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE
describe("#tail", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(tail());
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  // Happy Path
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]),[2]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });
});