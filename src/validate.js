import { getNames } from "./db_connect.js";

export function validateName(data) {

	if (data.name == "") {
		return emptyError;
	} else if (data.name.length > 50) {
		return false;
	}

	if (data.meaning == "") {
		return emptyError;
	} else if (data.name.length > 50) {
		return false;
	}

	if (data.nickname == "") {
		return emptyError;
	} else if (data.name.length > 50) {
		return false;
	}

	if (data.origin == "") {
		return emptyError;
	} else if (data.name.length > 50) {
		return false;
	}

	if (data.variation == "") {
		return emptyError;
	} else if (data.name.length > 50) {
		return false;
	}

	if (data.gender == "Empty") {
		return false;
	}

	const rows = getNames(gender);
	var listOfNames= [];

	for (let i = 0; i < rows.length; i++) {
		listOfNames.push(rows[i].name);
		if (rows[i].name == data.name) {
			console.log(data.name, "already exists.");
			return false;
		}
	}

	console.log(success);
	return true;
}

export function validateID(data) {

}