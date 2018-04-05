"use strict";

function calculateProfit() {
	// Read value of rounds from the input field
	let rounds = Number(document.getElementById("rounds").value);
	let pips;
	let wins = 0;

	// Make a loop which is executed as many times as was set through the input field.
	// Let win counter cumulating during every round of the loop.
	for (let counter = 1; counter <= rounds;counter++) {
	  pips = Math.round( (Math.random( ) * 5) + 1 );
	  if (pips === 1 || pips === 3 || pips === 5) {
			// If the randomized pips is 1, 3 or 5,  no pay
	    wins = wins;

		} else if (pips === 2 || pips === 4) {
			// Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
	    wins = wins + 1.25;

		} else if (pips === 6) {
			// Otherwise the pips 6 returns the inserted bet 150%
			wins = wins + 1.50;
	  }
	}
	//Calculate the profit (euros) by subtracting the win counter (euros) from the bets (euros)
	let profit = rounds - wins;
	// Write the answer on the page, to the answer div, as content of the div
	let text = "Bets were altogether " + rounds + " euros";
	text += "<br />Wins were " + wins + " euros";
	text += "<br />Profit was " + profit + " euros";
	document.getElementById("answer").innerHTML = text;
}
