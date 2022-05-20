console.log(typeof NaN); // output: number
console.log(typeof Infinity); // output: number

console.log(Infinity > 10000000000000); // output: true (Infinity 比任何數字都要大)

console.log(5 / "Hi"); // output: NaN

console.log(5 / 0); // output: Infinity

console.log(Infinity * 5); // output: Infinity

console.log(Infinity * Infinity); // output: NaN (不定型，可能是任何數字)
console.log(0 / 0); // output: NaN (不定型，可能是任何數字)
console.log(0 * Infinity); // output: NaN (不定型，可能是任何數字)

// ------------------------------------------------------------

// 確認一個職是否是 NaN ==> 使用 isNan()
let result = 0 / 0;
console.log(result == NaN); // output: false
// ==>
console.log(isNaN(result)); // output: true
