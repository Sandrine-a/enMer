const express = require("express");
require("dotenv").config();

const app = express();

// console.log(process.env);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
