"use strict";


// Randomize the pips1 and pips2 once
let pips1 = Math.round((Math.random() * 5) + 1);
let pips2 = Math.round((Math.random() * 5) + 1);

// Set the count to be one (now you have randomized once)
let count = 1;
// Repeat as long as (pips are not equal)
while ( pips1 != pips2) {
	pips1 = Math.round((Math.random() * 5) + 1);
	pips2 = Math.round((Math.random() * 5) + 1);
	// Randomize again
	count++;
// Increment counter by one
}

document.write(`Same dice pips: ${pips1} and ${pips2}.`);
document.write(`There were ${count} randomization rounds until we got the same pips.`);