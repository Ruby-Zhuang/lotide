// REQUIRE MODULES
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// TEST CODE
describe("#eqObjects", () => {
  // Happy Path
  it("returns false if number of keys don't match", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });

  it("returns true for {a: '1', b: '2'} and {b: '2', a: '1'}", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns false for {a: '1', b: '2', c: '3'} and {a: '1', b: '2', d: '3'}", () => {
    const abc = { a: "1", b: "2", c: "3" };
    const abd = { a: "1", b: "2", d: "3" };
    assert.isFalse(eqObjects(abc, abd));
  });

  it("returns true for {c: '1', d: ['2', 3]} and {d: ['2', 3], c: '1'}", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });

  it("returns false for {c: '1', d: ['2', 3]} and {c: '1', d: ['2', 3, 4]}", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, cd2));
  });

  it("returns false for {a: {z: 1}, b: 2} and {a: {z: 1}, b: 2}", () => {
    const object1 = { a: { z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObjects(object1, object2));
  });

  it("returns false for {a: {y: 0, z: 1}, b: 2} and {a: {z: 1}, b: 2}", () => {
    const object1 = { a: { y: 0, z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObjects(object1, object2));
  });

  it("returns true for {a: {z: {y: [1]}}, b: ['2', 3, 4]} and {a: {z: {y: [1]}}, b: ['2', 3, 4]}", () => {
    const object1 = { a: { z: {y: [1]}}, b: ["2", 3, 4] };
    const object2 = { a: { z: {y: [1]}}, b: ["2", 3, 4] };
    assert.isTrue(eqObjects(object1, object2));
  });
});

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
// assertEqual(eqObjects({ a: { z: 1 }, b: ["2", 3, 4] }, { a: { z: 1 }, b: ["2", 3, 4]}), true);
// assertEqual(eqObjects({ a: { z: {y: 1} }, b: 2 }, { a: { z: {y: 1} }, b: 2 }), true);
// assertEqual(eqObjects({ a: { z: {y: 1} }, b: 2 }, { a: { z: {y: 2} }, b: 2 }), false);
// assertEqual(eqObjects({ a: { z: {y: [1]}}, b: ["2", 3, 4] }, { a: { z: {y: [1]}}, b: ["2", 3, 4] }), true);
// assertEqual(eqObjects({ a: { z: {y: {z: 1}}}, b: ["2", 3, 4] }, { a: { z: {y: {z: 1}}}, b: ["2", 3, 4] }), true);