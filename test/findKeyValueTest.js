// REQUIRE FUNCTIONS
const assert = require('chai').assert;
const findKeyValue = require("../findKeyValue");

// TEST CODE
describe("#findKeyValue", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(findKeyValue({}, "drama"));
  });

  it("returns undefined for empty value", () => {
    const input = {sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", romance: ""};
    assert.strictEqual(findKeyValue(input), undefined);
  });

  // Happy Path
  it("returns 'sciFi' for 'The Expanse' in {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', romance: ''}", () => {
    const input = {sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", romance: ""};
    assert.strictEqual(findKeyValue(input, "The Expanse"), "sciFi");
  });
  
  it("returns 'romance' for '' in {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', romance: ''}", () => {
    const input = {sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", romance: ""};
    assert.strictEqual(findKeyValue(input, ""), "romance");
  });

  it("returns undefined for 'That '70s Show' in {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', romance: ''}", () => {
    const input = {sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", romance: ""};
    assert.strictEqual(findKeyValue(input, "That '70s Show"), undefined);
  });
});
