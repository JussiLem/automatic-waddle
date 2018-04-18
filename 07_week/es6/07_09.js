"use strict";
function tellAge() {
	// Read value of yearOfBirth from the input field
	let yearOfBirth = document.getElementById("yearOfBirth").value;

	// Figure out the current date into today variable
	let today = new Date();
	let year = today.getFullYear();
	// Use getFullYear() method to get the current year out from the today variable

	// Calculate the (rough estimate of the) age
	let age = year - yearOfBirth;
	let message;
	// If age is less than zero
	if (age < 0) {
		//  Show an error message
		message = "please input real birthday.";
	} else {
		message = "You are now " +age+ " years old.";
		message += "<br />Current year is" + year +".";
	}
	document.getElementById("answer").innerHTML = message;
	// otherwise
	// Tell the age

}