// REQUIRE FUNCTIONS
const assert = require('chai').assert;
const findKey = require("../findKey");

// TEST CODE
describe("#findKey", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(findKey());
  });

  it("returns undefined for empty value", () => {
    assert.strictEqual(findKey({}), undefined);
  });

  // Happy Path
  it("returns 'noma' for x => x.stars === 2 in {BlueHill: {stars: 1}, Akaleri: {stars: 3}, noma: {stars: 2}, elBulli: {stars: 3}}", () => {
    const input = {
      BlueHill:  { stars: 1 },
      Akaleri:   { stars: 3 },
      noma:      { stars: 2 },
      elBulli:   { stars: 3 }
    };
    assert.strictEqual(findKey(input, x => x.stars === 2), "noma");
  });

  it("returns 'Akaleri' for x => x.stars > 2 in {BlueHill: {stars: 1}, Akaleri: {stars: 3}, noma: {stars: 2}, elBulli: {stars: 3}}", () => {
    const input = {
      BlueHill:  { stars: 1 },
      Akaleri:   { stars: 3 },
      noma:      { stars: 2 },
      elBulli:   { stars: 3 }
    };
    assert.strictEqual(findKey(input, x => x.stars > 2), "Akaleri");
  });

  it("returns 'Undefined' for x => x.stars === 4 in {BlueHill: {stars: 1}, Akaleri: {stars: 3}, noma: {stars: 2}, elBulli: {stars: 3}}", () => {
    const input = {
      BlueHill:  { stars: 1 },
      Akaleri:   { stars: 3 },
      noma:      { stars: 2 },
      elBulli:   { stars: 3 }
    };
    assert.isUndefined(findKey(input, x => x.stars === 4));
  });
});