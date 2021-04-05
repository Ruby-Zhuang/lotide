// REQUIRE MODULES
const assert = require('chai').assert;
const head = require('../head');

// TEST CODE
describe("#head", () => {
  it("returns undefined for []", () => {
    assert.isUndefined(head([]));
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  
  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
});