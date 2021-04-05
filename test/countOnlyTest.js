// REQUIRE FUNCTIONS
const assert = require('chai').assert;
const countOnly = require("../countOnly");

// TEST CODE
describe("#countOnly", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(countOnly());
  });

  // Happy Path
  it("returns {Karl: 3} for {'Karl': true, 'Karima': true, 'Fang': true} in ['Karl', 'Karl', 'Karl']", () => {
    const items = ["Karl", "Karl", "Karl"];
    const itemsToCount = {"Karl": true, "Karima": true, "Fang": true};
    const actual = countOnly(items, itemsToCount);
    const expected = {Karl: 3};
    assert.deepEqual(actual, expected);
  });

  it("returns {} for {'Karl': true, 'Karima': true, 'Fang': true} in ['Ruby']", () => {
    const items = ["Ruby"];
    const itemsToCount = {"Karl": true, "Karima": true, "Fang": true};
    const actual = countOnly(items, itemsToCount);
    const expected = {};
    assert.deepEqual(actual, expected);
  });

  it("returns {Jason: 1, Fang: 2} for {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false} in ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe']", () => {
    const items = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const itemsToCount = {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false};
    const actual = countOnly(items, itemsToCount);
    const expected = {Jason: 1, Fang: 2};
    assert.deepEqual(actual, expected);
  });
});