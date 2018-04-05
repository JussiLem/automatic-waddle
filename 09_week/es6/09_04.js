"use strict";

// Create an array with minigolf results of eight players
// (23, 19, 37, 20, 21, 30, 26, 24)
let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

// Sort the array
minigolf.sort();
// Assign the smallest result to a variable
let smallestResult = minigolf[0];

// Assign the biggest result to a variable
let biggestResult = [minigolf.length-1];

let output = "The smallest result is " + smallestResult + "(winner).";
output += "<br />The biggest result is " + biggestResult + ".";
document.getElementById("answer").innerHTML = output;
// Write the answer on the page, to the answer div, as content of the div
