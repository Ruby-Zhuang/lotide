// REQUIRE MODULES
const assert = require('chai').assert;
const countLetters = require('../countLetters');

// TEST CODE
describe("#countLetters", () => {
  // Edge Cases
  it("returns undefined for empty input", () => {
    assert.isUndefined(countLetters());
  });

  it("returns undefined for empty string", () => {
    assert.isUndefined(countLetters(""));
  });

  // Happy Path
  it("returns {L: 2, H: 1} for 'LHL'", () => {
    assert.deepEqual(countLetters("LHL"), {L: 2, H: 1});
  });

  it("returns {L: 1, H: 1, l:1} for 'LHl'", () => {
    assert.deepEqual(countLetters("LHl"), {L: 1, H: 1, l:1});
  });

  it("returns {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1} for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});
  });
});