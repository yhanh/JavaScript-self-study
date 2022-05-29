const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  // 客戶端的請求是甚麼，我要回復的 response 是甚麼

  //   console.log(request.url);

  //   請求的時候網址是一個斜線 "/"
  if (request.url == "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      response.writeHead(200, { "Context-Type": "text/html" });
      response.write(data);
      response.end;
    });
    // response.write("You are on the homepage.");
    // response.end();
  } else {
    let parsedURL = url.parse(request.url);

    response.write("Hello, " + parsedURL.pathname);
    response.end();
  }
});

server.listen(3501, () => {
  console.log("Server is running on port 3501");
});
// server 聆聽 3501 的 request，若有網頁使用者想要從網站獲得一些東西，他會給我一個請求，若不是在 port 3501，就不用理會，反之若是 3501，就必須聆聽他的請求
