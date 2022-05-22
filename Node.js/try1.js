// Let's make our own modules

function morning(name) {
  console.log("Good morning, " + name);
}

// 要把這個函式傳給別人的方式是 export
module.exports.morning = morning;
// 設定 export 這個物件的一個屬性叫 morning，等號右邊的 morning 是上方 function 的名字
// 另外，因為 module 太常使用，這裡其實可以省略直接寫 exports.morning = morning;

// console.log(module.exports);
// output: { morning: [Function: morning] }
