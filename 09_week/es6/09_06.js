"use strict";
let rainfall = [47.0, 36.6, 34.7, 37.0, 41.9, 47.5, 61.7, 74.8, 65.4, 69.7, 66.1, 54.6];

// initialize the sum variable to start from 0
let sum = 0;
for (let i = 0; i < rainfall.length; i++) {
	// sum = sum + value at the i:th index in the array
	sum = sum + rainfall[i];
}
// write the answer on the HTML page
let output = "The annual rainfall in Helsinki is " + sum.toFixed(1) + " mm.";

document.getElementById("answer").innerHTML = output;