import express from "express";
import bodyParser from "body-parser";
import { getRandomBoyName } from "./names.js";
import { getRandomGirlName } from "./names.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/boy", (req, res) => {
  const randomBoyName = getRandomBoyName();
  console.log("Boy's first name:", randomBoyName.name);
  res.render("index.ejs", {
    firstName : randomBoyName.name,
  });
});

app.post("/girl", (req, res) => {
  const randomGirlName = getRandomGirlName();
  console.log("Girl's first name:", randomGirlName.name);
  res.render("index.ejs", {
    firstName : randomGirlName.name,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

