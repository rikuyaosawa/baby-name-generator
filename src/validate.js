export function validateName(data) {

	const emptyError = "The field cannot be left empty";
	const success = "Validation complete. No problem found.";

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
		return emptyError;
	}

	console.log(success);
	return "Success";
}