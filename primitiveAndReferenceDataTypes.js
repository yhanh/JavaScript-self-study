// Primitive Data Types

let num1 = 100;
let num2 = num1;

console.log(num1, num2); // output: 100 100

num1 = 50;
console.log(num1, num2); // output: 50 100

// --------------------------------------------------

// ReferenceDataTypes

let friends1 = ["Karla", "Russell"];
let friends2 = friends1;

console.log(friends1, friends2); // output: (2) ['Karla', 'Russell'] (2) ['Karla', 'Russell']

friends1.push("Reina");
console.log(friends1, friends2); // output: (2) ['Karla', 'Russell', 'Reina'] (2) ['Karla', 'Russell', 'Reina']
