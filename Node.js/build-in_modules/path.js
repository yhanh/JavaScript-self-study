let path = require("path");   // 要使用某個 module 之前，記得先 require

// join()
let newPath = path.join(__dirname, "addToThePath.js");
console.log(newPath);
// output: c:\Users\user\Desktop\JavaScript-self-study\Node.js\build-in_modules\addToThePath.js

// extname()
console.log(path.extname(__filename));   // output: .js

// basename() 取得檔名
console.log(path.basename(__filename));   // output: path.js