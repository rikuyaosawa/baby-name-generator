CREATE TABLE boy_name (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) UNIQUE,
	meaning VARCHAR(50),
	nickname VARCHAR(50),
	origin VARCHAR(50),
	variation VARCHAR(50),
	gender VARCHAR(10)
);

CREATE TABLE girl_name (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) UNIQUE,
	meaning VARCHAR(50),
	nickname VARCHAR(50),
	origin VARCHAR(50),
	variation VARCHAR(50),
	gender VARCHAR(10)
);