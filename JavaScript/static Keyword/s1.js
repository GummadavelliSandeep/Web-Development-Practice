class MathCal {
  static PI = 3.14159;
  static getRadius(radius) {
    return radius * 2;
  }
  static circumRadius(radius) {
    return 2 * this.PI * radius;
  }
}
console.log(MathCal.getRadius(2));
console.log(MathCal.circumRadius(4).toFixed(2));
