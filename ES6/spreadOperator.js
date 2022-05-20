// console.log(Math.max(-2, 6, 3, 1));   // 可以放入任意數量的 parameter

function checkBiggest(...numbers) {
  console.log(numbers);
  let biggest = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  return biggest;
}
console.log(checkBiggest(-2, 100, 6, 7, 10, 15, 18, 20, 29));

console.log(Math.max(-2, 100, 6, 7, 10, 15, 18, 20, 29));

// ------------------------------------------------------------

let friends1 = ["Karla", "Russell", "Maegan"];
let friends2 = ["Sam", "Trace", "Nathan"];

let friends = [...friends1, ...friends2];
console.log(friends); // output: (6) ['Karla', 'Russell', 'Maegan', 'Sam', 'Trace', 'Nathan']
