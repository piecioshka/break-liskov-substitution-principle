const { assert } = require("chai");
const { Square, Rectangle } = require("./index");

function spec(constructor, label) {
  suite(label, () => {
    test("should have the width and height what are passed", () => {
      const shape = new constructor(50, 40);
      assert.equal(shape.width, 50);
      assert.equal(shape.height, 40);
    });
  });
}

spec(Rectangle, "Rectangle");
spec(Square, "Square");
