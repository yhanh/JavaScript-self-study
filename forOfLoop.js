let numbers = [10, 20, 30];

// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
/* output:
10
20
30
*/

// forEach method
numbers.forEach((n) => {
  console.log(n);
});
/* output:
10
20
30
*/

// for of loop
for (let n of numbers) {
  console.log(n);
}
/* output:
10
20
30
*/

// --------------------

let name = "Hannah";
for (let n of name) {
  console.log(n);
}
/* output:
H
a
n
n
a
h
*/

// --------------------

let Hannah = {
  name: "Hannah Huang",
  age: 23,
};

for (let n of Hannah) {
  console.log(n);
}
// output: Uncaught TypeError: Hannah is not iterable