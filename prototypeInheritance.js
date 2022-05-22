function Person(name, age, height, weight) {
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight
}

Person.prototype.sayHi = function() {
    console.log(this.name + " says hi.");
}

Person.prototype.intro = function() {
    console.log("Hi, my name is " + this.name + ".");
}

function Student(name, age, height, weight, major, grade) {
    // this keyword refers to Student
    Person.call(this, name, age, height, weight);
    this.major = major,
    this.grade = grade
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function() {
    console.log("I am studying.");
}

let Hannah = new Student("Hannah Huang", 23, 161, 50, "LA", 4.3);
console.log(Hannah);
/* output: 
Student {name: 'Hannah Huang', age: 23, height: 161, weight: 50, major: 'LA', …}
age: 23
grade: 4.3
height: 161
major: "LA"
name: "Hannah Huang"
weight: 50
[[Prototype]]: Person
study: ƒ ()
[[Prototype]]: Object
intro: ƒ ()
sayHi: ƒ ()
constructor: ƒ Person(name, age, height, weight)
[[Prototype]]: Object */

Hannah.study();   // output: I am studying.


let Sharon = new Person("Sharon Kao", 22, 164, 48);
Sharon.study();   // Sharon.study is not a function -> Sharon 只是 Person，他不會有 Student 的屬性和方法