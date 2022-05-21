let fruits = ["Grapes", "Apple", "Banana"];

// scenario 1
// console.log(fruits.sort());   // output: (3) ['Apple', 'Banana', 'Grapes']

// scenario 2
fruits.sort();
console.log(fruits);   // output: (3) ['Apple', 'Banana', 'Grapes']
// sort() 會改變原本的 array！！！

// --------------------------------------------------

let luckies = [15, 1, 2, 16, 99, 17, 3];
// console.log(luckies.sort());   // output: (7) [1, 15, 16, 17, 2, 3, 99]

luckies.sort((a, b) => {
  return a - b;
});
console.log(luckies);   // output: (7) [1, 2, 3, 15, 16, 17, 99]

luckies.sort((a, b) => {
  return b - a;
});
console.log(luckies);   // output: (7) [99, 17, 16, 15, 3, 2, 1]
