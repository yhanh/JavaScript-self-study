// Let's make our own modules

let try1 = require("./try1"); // 這邊不用加上副檔名
// require 也是 wrapper 中的一個 parameter，使用 require 拿到 try1.js 中 exports 裡的值/function

// console.log(try1);
// output: { morning: [Function: morning] }

let name = "Russell";

try1.morning(name);   // output: Good morning, Russell


let try2 = require("./try2");

try2.night(name);   // output: Good night, Russell