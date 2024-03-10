import express from "express";
import bodyParser from "body-parser";
import { 
  getRandomBoyName, 
  getRandomGirlName,
} from "./names.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/boy", (req, res) => {
  const randomBoyName = getRandomBoyName();
  const randomMiddleName = getRandomBoyName(); 
  res.render("index.ejs", {
    fN_name : randomBoyName.name,
    fN_meaning : randomBoyName.meaning,
    fN_nickname : randomBoyName.nickname,
    fN_origin : randomBoyName.origin,
    fN_variation : randomBoyName.variation,
    mD_name : randomMiddleName.name,
    mD_meaning : randomMiddleName.meaning,
    mD_nickname : randomMiddleName.nickname,
    mD_origin : randomMiddleName.origin,
    md_variation : randomMiddleName.variation,
  });
});

app.post("/girl", (req, res) => {
  const randomGirlName = getRandomGirlName();
  const randomMiddleName = getRandomGirlName(); 
  res.render("index.ejs", {
    fN_name : randomGirlName.name,
    fN_meaning : randomGirlName.meaning,
    fN_nickname : randomGirlName.nickname,
    fN_origin : randomGirlName.origin,
    fN_variation : randomGirlName.variation,
    mD_name : randomMiddleName.name,
    mD_meaning : randomMiddleName.meaning,
    mD_nickname : randomMiddleName.nickname,
    mD_origin : randomMiddleName.origin,
    mD_variation : randomMiddleName.variation,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

