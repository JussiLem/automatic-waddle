// $(document).ready(function () {
calculateFee();
"use strict";
function calculateFee() {
	let price = document.getElementById("price").value;

	// Read value from the input field
	let fee = price * (3.44 / 100);
	// Calculate fee, save the result to a variable
	if(fee < 2400) {
		fee = 2400;
	}
	// If the fee is under minimum, change the fee
	let output = `Real state agent's fee is ${fee} euros`;
	document.getElementById("fee").innerHTML = output;
}