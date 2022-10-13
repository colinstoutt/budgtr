const budget = require("./models/budget.js");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(port, () => {
  console.log("Budgtr is now listening...");
});
