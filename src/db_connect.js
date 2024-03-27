import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "name",
  password: "postgres",
  // port: 5432,
  port: 5433
});

db.connect();

export async function getRandomName(gender) {

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

export async function getDatabase(gender) {
  let dbName;

  if (gender === "boy") {
    dbName = "boy_name";
  } else if (gender === "girl") {
    dbName = "girl_name";
  }

  const result = await db.query(`
    SELECT *
    FROM ${dbName}
    ORDER BY id ASC
  `);

  return result.rows;
}

export async function getNameCount(gender) {
  let dbName;

  if (gender === "boy") {
    dbName = "boy_name";
  } else if (gender === "girl") {
    dbName = "girl_name";
  }

  const result = await db.query(`
    SELECT COUNT(*)
    FROM ${dbName}
  `);

  console.log(`Number of rows in ${dbName}: ${result.rows}`);

  return result.rows[0].count;
}