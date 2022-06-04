const express = require("express");
const app = express();
const ejs = require("ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.send("This is homepage.");
  res.render("index.ejs"); // 要被 res.render 的文件一定要再 views 資料夾中
});

app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.render("person.ejs", { name });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
