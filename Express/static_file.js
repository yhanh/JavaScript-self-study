const express = require("express");
const app = express();
const path = require("path");

// using middleware serving a static file
app.use(express.static("public"));
// public 裡都是靜態的資料

// handle different request (這裡是在處理不同的請求)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ref.html"));
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
