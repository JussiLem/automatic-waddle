function tellAge() {
	let yearOfBirth = document.getElementById("yearOfBirth").value;
	// Read value of yearOfBirth from the input field
	// let ageDifMs = Date.now() - yearOfBirth.getTime();
	// Figure out the current date into today variable
	// let ageDate = new Date(ageDifMs);
	// Use getFullYear() method to get the current year out from the today variable
	// return Math.abs(ageDate.getUTCFullYear);
	// Calculate the (rough estimate of the) age
	let age = today.getUTCFullYear()-yearOfBirth;
	let message;
	// If age is less than zero
	if (age < 0) {
		//  Show an error message
		message = "please input real birthday.";
	} else {
		message = `You are now ${age} years old.`;
		message = `Current year is ${today.getUTCFullYear()}`;
	}
	document.getElementById("answer").innerHTML = message;
	// otherwise
	// Tell the age

}
document.getElementById("answer").innerHTML = yearOfBirth;