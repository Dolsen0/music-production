const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render(`home`);
});

app.get("/main/:genre", (req, res) => {
  const {genre} = req.params;
  res.render("genre", { genre: genre });
});

app.get("*", (req, res) => {
  res.send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/home`);
});
