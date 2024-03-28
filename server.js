import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

import { getDatabase, getNameCount, getRandomName } from "./src/db_connect.js";
import { validateName } from "./src/validate.js";

const app = express();
const port = 3000;

///// MIDDLEWARE /////
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

///// NAVIGATION /////
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
  res.render("edit/edit-main.ejs");
});

///// EDIT /////
app.get("/edit/add", (req, res) => {
  res.render("edit/add-name.ejs");
});

app.get("/edit/database", (req, res) => {
  res.render("edit/select-database.ejs")
});

app.get("/edit/boy-name-db", async (req, res) => {
  const data = await getDatabase("boy");
  const numOfRows = await getNameCount("boy");

  res.render("edit/edit-database.ejs", {
    data : data,
    numOfRows : numOfRows,
    gender : "Boy"
  });
});

app.get("/edit/girl-name-db", async (req, res) => {
  const data = await getDatabase("girl");
  const numOfRows = await getNameCount("girl");

  res.render("edit/edit-database.ejs", {
    data : data,
    numOfRows : numOfRows,
    gender : "Girl"
  });
});

app.get("/edit/delete", (req, res) => {
  res.render("edit/delete-name.ejs");
});

app.post("/edit/delete/submit", (req, res) => {
  const data = req.body;
  console.log("ID for deletion inputed:", data);
});

app.post("/edit/add/submit", (req, res) => {
  const data = req.body;
  console.log("Name inputed\n", data);
  const result = validateName(data);
  if (result == "Success") {
    res.render("edit/edit-confirmation.ejs", {
      message : "You are about to add this name",
      data : data
    });
  } else {
    console.error("Error. Name failed to be added:", result);
    res.render("edit/add-name.ejs", {
      error : result
    });
  }
});

app.get("/edit/confirm", (req, res) => {
  res.render("edit/edit-confirmation.ejs", {
    success : "Name successfully added.",
  });
});


///// GENERATOR /////
app.get("/name-generator", (req, res) => {
  res.render("name-generator.ejs");
});

app.get("/boy", async (req, res) => {

  var chosenFirstName = await getRandomName("boy");
  var chosenMiddleName = await getRandomName("boy");

  while (chosenFirstName["name"] == chosenMiddleName["name"]) {
    console.info("--- Getting a new middle name ---");
    chosenMiddleName = await getRandomName("boy");
  }

  res.render("name-generator.ejs", {
    fN_data : chosenFirstName,
    mD_data : chosenMiddleName
  });
});

app.get("/girl", async (req, res) => {
  var chosenFirstName = await getRandomName("girl");
  var chosenMiddleName = await getRandomName("girl");

  while (chosenFirstName["name"] == chosenMiddleName["name"]) {
    console.info("--- Getting a new middle name ---");
    chosenMiddleName = await getRandomName("girl");
  }

  res.render("name-generator.ejs", {
    fN_data : chosenFirstName,
    mD_data : chosenMiddleName
  });
});

///// PORT /////
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
