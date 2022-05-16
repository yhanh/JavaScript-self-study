// function declaration

// sayHi();   // 可以先執行 function 再定義 function(hoisting)

// function sayHi() {
//   console.log("Hi");
// }



// arrow function expression syntax

let sayHi = (name) => {
  console.log("Hi " + name);
};

sayHi("Karla"); // 不能先執行 function 再定義 function




// this keyword

let Reina = {
  name: "Reina Ikeda",
  // function decoration
  greeting() {
    console.log("Hi, my name is " + this.name + ".");   // 這裡的 this 指的是 Reina 這個 object
  },
  // arrow function expression
  walk: () => {
    console.log("Reina is walking on the street");
    // console.log(this.name + " is walking on the street");   // 這裡的 this 指的是 window object 而不是 Reina 這個 object，所以通常在 object 中不會使用 arrow function expression
    console.log(this);
  },
};

Reina.greeting();
Reina.walk();
