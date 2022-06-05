const express = require("express");
const app = express();
const ejs = require("ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.send("This is homepage.");
  const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
    { name: "C++", rating: 6.6, popularity: 7.7, trending: "same" },
    { name: "PHP", rating: 2.5, popularity: 4.7, trending: "decreasing" },
    { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "same" },
  ];
  res.render("index.ejs", { languages }); // 要被 res.render 的文件一定要再 views 資料夾中
});

// app.get("/:name", (req, res) => {
//   let { name } = req.params;
//   res.render("person.ejs", { name });
// });

app.get("/resopnse", (req, res) => {
  console.log(req.query);
  let { fullname, age } = req.query;
  res.render("respond.ejs", { fullname, age });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
