import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "name",
  password: "postgres",
  port: 5432,
  // port: 5433
});

db.connect();

export async function getRandomName(gender) {

  const dbName = setDBname(gender);
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

  const dbName = setDBname(gender);
  const result = await db.query(`
    SELECT *
    FROM ${dbName}
    ORDER BY id ASC
  `);

  return result.rows;
}

export async function getNameCount(gender) {

  const dbName = setDBname(gender);
  const result = await db.query(`
    SELECT COUNT(*)
    FROM ${dbName}
  `);

  const count = result.rows[0].count;
  console.log(`Number of rows in ${dbName}: ${count}`);
  return count;
}

export async function getNames(gender) {

  const dbName = setDBname(gender);
  const result = await db.query(`
    SELECT name
    FROM ${dbName}
  `);

  console.log(result.rows);
  return result.rows;
}

function setDBname(gender) {
  if (gender === "boy") {
    return "boy_name";
  } else if (gender === "girl") {
    return "girl_name";
  }
}
