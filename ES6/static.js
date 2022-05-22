// static properties and methods
class Circle {
  static pi = 3.1415926535; // static property

  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    // return this.radius * this.radius * 3.14;
    return this.radius * this.radius * Circle.pi;
  }
  gatPerimeter() {
    // return 2 * 3.14 * this.radius;
    return 2 * Circle.pi * this.radius;
  }
  static getAreaFormula() {
    // 公式對於每一個圓都是一樣的 -> 設為 static method -> 屬於 Circle 這個 class
    console.log("r * r * 3.14");
  }
}

// let c1 = new Circle(10);
// console.log(c1.gatPerimeter()); // output: 62.800000000000004

Circle.getAreaFormula(); // output: r * r * 3.14

let c2 = new Circle(5);
console.log(c2.getArea()); // output: 78.5398163375
