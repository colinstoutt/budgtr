const budget = require("./models/budget.js");
const express = require("express");
const app = express();
const port = 3000;

//middleware
app.use(express.static("public"));

// INDEX route
app.get("/", (req, res) => {
  res.render("index.ejs", {
    budget: budget,
  });
});

app.listen(port, () => {
  console.log("Budgtr is now listening...");
});
