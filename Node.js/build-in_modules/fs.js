// fs => file system 可以在 JS 製作一些文件
const fs = require("fs");

// 建立文件
// fs.writeFile("fs-test.txt", "Today is a good day.", (e) => {
//   if (e) throw e;

//   console.log("File has been written.");   // File has been written. 且在資料夾中增加了一個自動生成的 fs-test.txt 檔案
// });

// 讀取文件
fs.readFile("./fs-test.txt", "utf-8", (e, data) => {
  if (e) throw e;
  console.log(data);   // output: Today is a good day.
});
