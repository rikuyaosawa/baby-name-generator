import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import morgan from "morgan";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "name",
  password: "postgres",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

async function getRandomName(gender) {

  let dbName;

  if (gender === "boy") {
    dbName = "boy_name";
  } else if (gender === "girl") {
    dbName = "girl_name";
  }

  const result = await db.query(`
    SELECT * 
    FROM ${dbName} 
    ORDER BY random()
    LIMIT 1
  `);

  // console.log(result.rows)
  console.log(result.rows[0].name);
  
  return result.rows[0];
}

app.get("/", (req, res) => {
  res.redirect("home.ejs");
});

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
})

app.get("/name-generator", (req, res) => {
  res.render("name-generator.ejs");
})

app.post("/boy", async (req, res) => {

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

app.post("/girl", async (req, res) => {
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
