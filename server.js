const budget = require("./models/budget.js");

const express = require("express");
const app = express();
const port = 3000;

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// INDEX route
app.get("/budgets", (req, res) => {
  console.log(Object.values(budget));
  res.render("index.ejs", {
    budgetAll: budget,
  });
});

// NEW route
app.get("/budgets/new", (req, res) => {
  res.render("new.ejs");
});

// SHOW route
app.get("/budget/:index", (req, res) => {
  res.render("show.ejs", {
    budget: budget[req.params.index],
  });
});

// POST route
app.post("/budgets", (req, res) => {
  console.log(req.body);

  budget.push(req.body);
  res.redirect("/budgets");
});

app.listen(port, () => {
  console.log("Budgtr is now listening...");
});
