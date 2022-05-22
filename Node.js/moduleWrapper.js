// 瀏覽器上是無法使用的
console.log(__filename); // 此檔案在電腦裡的路徑
// output: c:\Users\user\Desktop\JavaScript-self-study\Node.js\tempCodeRunnerFile.js

console.log(__dirname); // directory / folder name 目前所在資料夾
// output: c:\Users\user\Desktop\JavaScript-self-study\Node.js

// --------------------------------------------------

console.log(module); // module 是一個物件，其中有很多 properties
/* output: 
Module {
    id: '.',
    path: 'c:\\Users\\user\\Desktop\\JavaScript-self-study\\Node.js',
    exports: {},
    filename: 'c:\\Users\\user\\Desktop\\JavaScript-self-study\\Node.js\\moduleWrapper.js',
    loaded: false,
    children: [],
    paths: [
      'c:\\Users\\user\\Desktop\\JavaScript-self-study\\Node.js\\node_modules',
      'c:\\Users\\user\\Desktop\\JavaScript-self-study\\node_modules',
      'c:\\Users\\user\\Desktop\\node_modules',
      'c:\\Users\\user\\node_modules',
      'c:\\Users\\node_modules',
      'c:\\node_modules'
    ]
  } */

console.log(module.exports);   // output: {}
// exports 是 module 中的一個 property，他本身是一個 object
