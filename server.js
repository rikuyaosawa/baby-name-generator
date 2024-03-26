import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { getRandomName } from "./src/db_connect.js";
import { validateName } from "./src/validateName.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/names", (req, res) => {
  res.redirect("/name-generator");
});

app.get("/edit", (req, res) => {
  res.render("edit.ejs");
});

app.get("/edit/add", (req, res) => {
  res.render("add-name.ejs");
});

app.post("/add-name", (req, res) => {
  const data = req.body;
  validateName(data);
});

app.get("/name-generator", (req, res) => {
  res.render("name-generator.ejs");
});

app.get("/boy", async (req, res) => {

  const chosenFirstName = await getRandomName("boy");
  const chosenMiddleName = await getRandomName("boy");

  res.render("name-generator.ejs", {
    fN_name : chosenFirstName.name,
    fN_meaning : chosenFirstName.meaning,
    fN_nickname : chosenFirstName.nickname,
    fN_origin : chosenFirstName.origin,
    fN_variation : chosenFirstName.variation,
    mD_name : chosenMiddleName.name,
    mD_meaning : chosenMiddleName.meaning,
    mD_nickname : chosenMiddleName.nickname,
    mD_origin : chosenMiddleName.origin,
    mD_variation : chosenMiddleName.variation,
  });
});

app.get("/girl", async (req, res) => {
  const chosenFirstName = await getRandomName("girl");
  const chosenMiddleName = await getRandomName("girl");

  res.render("name-generator.ejs", {
    fN_name : chosenFirstName.name,
    fN_meaning : chosenFirstName.meaning,
    fN_nickname : chosenFirstName.nickname,
    fN_origin : chosenFirstName.origin,
    fN_variation : chosenFirstName.variation,
    mD_name : chosenMiddleName.name,
    mD_meaning : chosenMiddleName.meaning,
    mD_nickname : chosenMiddleName.nickname,
    mD_origin : chosenMiddleName.origin,
    mD_variation : chosenMiddleName.variation,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
