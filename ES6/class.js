// prototype
// function Person(name, age, height, weight) {
//     this.name = name,
//     this.age = age,
//     this.height = height,
//     this.weight = weight
// }

// Person.prototype.sayHi = function() {
//     console.log(this.name + " says hi.");
// }

// Person.prototype.intro = function() {
//     console.log("Hi, my name is " + this.name + ".");
// }



// class(ES6)
class Person2{
    // constructor function
    constructor(name, age, height, weight) {
        this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
    }
    sayHi() {
        console.log(this.name + " says hi.");
    }
    intro() {
        console.log("Hi, my name is " + this.name + ".");
    }
}

let Reina = new Person2("Reina Ikeda", 23, 165, 48);
let Austin = new Person2("Austin Kung", 23, 163, 61);
console.log(Reina);
/* output: 
Person2 {name: 'Reina Ikeda', age: 23, height: 165, weight: 48}
age: 23
height: 165
name: "Reina Ikeda"
weight: 48
[[Prototype]]: Object
constructor: class Person2
intro: ƒ intro()
sayHi: ƒ sayHi()
[[Prototype]]: Object */

console.log(Reina.sayHi === Austin.sayHi);   // output: true


// ------------------------------------------------------------


class Student2 extends Person2{
    constructor(name, age, height, weight, major, grade) {
        super(name, age, height, weight);
        this.major = major,
        this.grade = grade
    }
    study() {
        console.log("I am studying.");
    }
}

let Sport = new Student2("Sport Huang", 21, 170, 60, "HS", 4.0);
console.log(Sport);
/* output: 
Student2 {name: 'Sport Huang', age: 21, height: 170, weight: 60, major: 'HS', …}
age: 21
grade: 4
height: 170
major: "HS"
name: "Sport Huang"
weight: 60
[[Prototype]]: Person2
constructor: class Student2
study: ƒ study()
[[Prototype]]: Object
constructor: class Person2
intro: ƒ intro()
sayHi: ƒ sayHi()
[[Prototype]]: Object */



// function Student(name, age, height, weight, major, grade) {
//     // this keyword refers to Student
//     Person.call(this, name, age, height, weight);
//     this.major = major,
//     this.grade = grade
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.study = function() {
//     console.log("I am studying.");
// }

// let Hannah = new Student("Hannah Huang", 23, 161, 50, "LA", 4.3);
// console.log(Hannah);
// /* output: 
// Student {name: 'Hannah Huang', age: 23, height: 161, weight: 50, major: 'LA', …}
// age: 23
// grade: 4.3
// height: 161
// major: "LA"
// name: "Hannah Huang"
// weight: 50
// [[Prototype]]: Person
// study: ƒ ()
// [[Prototype]]: Object
// intro: ƒ ()
// sayHi: ƒ ()
// constructor: ƒ Person(name, age, height, weight)
// [[Prototype]]: Object */

// Hannah.study();   // output: I am studying.


// let Sharon = new Person("Sharon Kao", 22, 164, 48);
// Sharon.study();   // Sharon.study is not a function -> Sharon 只是 Person，他不會有 Student 的屬性和方法