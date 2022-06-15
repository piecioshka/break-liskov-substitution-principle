class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
    this.width = this.height = width;
  }
}

module.exports = {
  Square,
  Rectangle,
};
