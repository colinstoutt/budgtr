const budget = require("./models/budget.js");

const express = require("express");
const app = express();
const port = 3000;

//middleware
app.use(express.static("public"));

// INDEX route
app.get("/budgets", (req, res) => {
  console.log(Object.values(budget));
  res.render("index.ejs", {
    budgetAll: budget,
  });
});

// SHOW route
app.get("/budget/:index", (req, res) => {
  res.render("show.ejs", {
    budget: budget[req.params.index],
  });
});

app.listen(port, () => {
  console.log("Budgtr is now listening...");
});
