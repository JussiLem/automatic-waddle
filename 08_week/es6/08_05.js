"use strict";


function showWeightGoals() {
	// read the original weight to a variable
	let weight = document.getElementById("weight").value;
	// calculate how many kgs one should get lighter each week = weight * 0.1 / 7
	let weeklyWeightDrop = weight * 0.1 / 7;

	// initialize output text variable to start from empty text: ""
	let text = "";
	let newWeight = weight;
	// it will be used later to gather all the output lines. (String can hold also line breaks)

	for (var i = 1; i <= 7; i++) {

		// give the weight variable a new value which is weight after last
		newWeight = newWeight - weeklyWeightDrop;
		// measurement reduced by the how much to lose this week.
		text += "<br />After " + i + " .week " + newWeight.toFixed(1) + " kg";
		// add this week’s text + line break to the output text variable
	}

	// write the whole output text to the HTML page at once
	document.getElementById("answer").innerHTML = text;

	// TODO

}