// object
let Hannah = {
  name: "Hannah Huang",
  age: 23,
};

for (let i in Hannah) {
  console.log(i);
}
/* output:
name
age
*/

for (let i in Hannah) {
  console.log(Hannah[i]);
}
/* output:
  Hannah Huang
  23
*/

// array
let numbers = [10, 20, 30];
for (let i in numbers) {
  console.log(i);
}
/* output:
0
1
2
*/

for (let i in numbers) {
  console.log(numbers[i]);
}
/* output:
10
20
30
*/
