const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

// Set the static folder
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  //   res.sendFile("about.html", { root: path.join(__dirname, "../views") });
  res.render("about");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404);
  // res.sendFile("404.html", { root: path.join(__dirname, "../views") });
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
