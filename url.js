import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

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

async function getRandomName(gender) {

  let dbName;

  if (gender === "boy") {
    dbName = "boy_name";
  } else if (gender === "girl") {
    dbName = "girl_name";
  }

  const count = await db.query(
    `SELECT COUNT(*) \
    FROM ${dbName}`
  );

  const numOfNames = count.rows[0].count
  const randomID = Math.floor(1 + (Math.random() * numOfNames));

  const result = await db.query(
    `SELECT * \
    FROM ${dbName} \
    WHERE id = ${randomID}`
  );

  // console.log(result.rows)
  console.log(result.rows[0].name);
  
  return result.rows[0];
}


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/boy", async (req, res) => {

  const chosenFirstName = await getRandomName("boy");
  const chosenMiddleName = await getRandomName("boy");

  res.render("index.ejs", {
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

  res.render("index.ejs", {
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

