// prototype
// Compair to constuctor
function Person(name, age, height, weight) {
    console.log(this);   // Object{} 這邊指一個完全空白的 object，若是沒有 new 一個新的物件，this 會指向 window object
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight
    // this.sayHi = function(){
    //     console.log(this.name + " says hi.");
    // }
}

Person.prototype.sayHi = function() {   // 把相同的屬性或方法指向共同的記憶體位置
    console.log(this.name + " says hi.");
}

let Russell = new Person("Russell Martin", 22, 180, 65);
let Karla = new Person("Karla Blanco", 22, 158, 55);

console.log(Russell);
/* output: 
Person {name: 'Russell Martin', age: 22, height: 180, weight: 65}
age: 22
height: 180
name: "Russell Martin"
weight: 65
[[Prototype]]: Object
sayHi: ƒ ()
constructor: ƒ Person(name, age, height, weight)
[[Prototype]]: Object */

Russell.sayHi();   // output: Russell Martin says hi.

console.log(Russell.sayHi === Karla.sayHi);   // true


// prototype inheritance
let num = [15, 22, 9];

num.push(30);
console.log(num);
/* output: 
(4) [15, 22, 9, 30]
0: 15
1: 22
2: 9
3: 30
length: 4
[[Prototype]]: Array(0) */
// 創造了這個 array 的時候，從 array [[Prototype]]: Array(0) 繼承了很多 array 的屬相和方法；[[Prototype]]: Array(0) 中 可以看到 [[Prototype]]: Object，所以 array 從 [[Prototype]]: Object 中又繼承了很多 object 的屬性和方法


// coercion 
let myName = "Hannah Huang";
console.log(typeof myName);   // output: string
console.log(myName);   // output: Hannah Huang

let myName2 = new String("Hannah Huang");
console.log(typeof myName2);   // output: object
console.log(myName2);
/* output: 
String {'Hannah Huang'}
0: "H"
1: "a"
2: "n"
3: "n"
4: "a"
5: "h"
6: " "
7: "H"
8: "u"
9: "a"
10: "n"
11: "g"
length: 12
[[Prototype]]: String
[[PrimitiveValue]]: "Hannah Huang" */
// 創造的這個 string object 裡有一個 [[Prototype]]: String，也就是說，繼承了很多 string 的屬性和方法
// 這種創造字串的方法會對記憶體造成額外的負擔
