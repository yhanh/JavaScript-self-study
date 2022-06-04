const express = require("express");
const app = express();
const path = require("path");
// const bodyParser = require("body-parser");

// middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// handle different request (這裡是在處理不同的請求)
app.get("/", (req, res) => {
  //   res.send("<h1>You are on the home page.</h1>");
  res.sendFile(path.join(__dirname, "ref.html"));
});

app.get("/hannah", (req, res) => {
  res.sendFile(__dirname + "/ref.html");
});

app.get("/russell", (req, res) => {
  res.send("This is Russell's page.");
});

// way1: routing for all
// 要放在所有 request handling 的下面
// app.get("*", (req, res) => {
//   res.send("Cannnot find what you want.");
// });

// way2: routing for pattern
// app.get("/fruit/:someFruit", (req, res) => {
//   console.log(req.params);
//   res.send("You are looking for " + req.params.someFruit);
// });

// way3: routing for query (POST)
// app.post("/formHandling", (req, res) => {
//   let { fullname, age } = req.body;
//   res.send(
//     `Thanks for posting. Your name is ${fullname}, and your age is ${age}`
//   );
// });

// way4: routing for query (GET)
app.get("/formHandling", (req, res) => {
  //   console.log(res.send);
  let { fullname, age } = req.query;
  res.send("Thanks " + fullname + " for posting.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
