// constuctor
// Compair to prototype
function Person(name, age, height, weight) {
    console.log(this);   // Object{} 這邊指一個完全空白的 object，若是沒有 new 一個新的物件，this 會指向 window object
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight
    this.sayHi = function(){
        console.log(this.name + " says hi.");
    }
}

let Russell = new Person("Russell Martin", 22, 180, 65);
let Karla = new Person("Karla Blanco", 22, 158, 55);

console.log(Russell);   // output: Person {name: 'Russell Martin', age: 22, height: 180, weight: 65}

Russell.sayHi();   // output: Russell Martin says hi.

console.log(Russell.sayHi === Karla.sayHi);   // False，雖然是共同的方法，卻占用兩處記憶體位置