const express = require("express");
const app = express();

// routing in Express (routing 是路徑的意思)

// handle different request (這裡是在處理不同的請求)
app.get("/", (req, res) => {
  // req 和 res 都是非常巨大的 object
  res.send("<h1>You are on the home page.</h1>"); // 也可以寫 HTML
  // res.send("<p>Welcome to our web.</p>"); // Cannot set headers after they are sent to the client -> 注意，不可以送兩次 res
});

app.get("/hannah", (req, res) => {
  res.sendFile(__dirname + "/ref.html");
});

app.get("/russell", (req, res) => {
  res.send("This is Russell's page.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
