class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
      //   ._width tells other developers that it is an private property
    } else {
      console.log("width must be positive number");
    }
  }
  set height(newheight) {
    if (newheight > 0) {
      this._height = newheight;
    } else {
      console.log("Height must be positive number");
    }
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
}
const rectangle = new Rectangle(2, "pizza");
console.log(rectangle.width);
console.log(rectangle.height);
