const express = require("express");
const app = express();
const path = require("path");

// using middleware serving a static file
app.use(express.static("public"));

// handle different request (這裡是在處理不同的請求)
app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.get("/hannah", (req, res) => {
  res.send("This is Hannah's page.");
});

app.get("/russell", (req, res) => {
  //   res.send("This is Russell's page.");
  res.status(302);
  res.sendFile(path.join(__dirname, "move.html"));
});

app.get("*", (req, res) => {
  res.status(404); // 設定 status code
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
