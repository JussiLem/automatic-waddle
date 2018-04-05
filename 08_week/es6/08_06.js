"use strict";
const showComparisonScores = () => {
	let votes = document.getElementById("votes").value;
	let candidates = document.getElementById("candidates").value;
	let candidateVotes = votes;
	let text = "";

	// For each candidates
	for(let counter = 1; counter <= candidates; counter++) {
		let candidateVotes = votes / counter;

		text += "<br />" + counter + ". candidate: " + candidateVotes.toFixed(0);
		// votes / counter
	}
	// Calculate comparison score for candidate
	document.getElementById("answer").innerHTML = text;
	// Show scores

};