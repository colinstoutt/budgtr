const budget = require("./models/budget.js");
const express = require("express");
const app = express();
const port = 3000;

//middleware
app.use(express.urlencoded({ extended: false }));

// INDEX route
app.get("/", (req, res) => {
  res.send(budget);
});

app.listen(port, () => {
  console.log("Budgtr is now listening...");
});
