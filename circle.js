class Circle {
  area(radius) {
    return radius * radius;
  }
  circumference(radius) {
    return 2 * Math.PI * radius;
  }
}
module.exports = Circle;
