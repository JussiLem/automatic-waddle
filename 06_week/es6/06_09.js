"use strict";
tellInfractionFine();

function tellInfractionFine() {
	let speed = document.getElementById("drivingSpeed").value;
	let limit = document.getElementById("speedLimit").value;
	let total = speed - limit;
	const noSpeed = "No speeding, no fine.";
	const slightSpeed = "Infraction fine is 85 euros.";
	const littleSpeed = "Infraction fine is 115 euros.";
	const bitSpeed = "Infraction fine is 70 euros.";
	const hundraEuro = "Infraction fine is 100 euros.";
	const income = "Income-based unit fine.";
	switch (total)
	{
	case (total <= 0):
		document.getElementById("answer").innerHTML = noSpeed;
		break;
	case (limit >= 10 && limit <= 60 && total <=15):
		document.getElementById("answer").innerHTML = slightSpeed;
		break;
	case (limit >= 10 && limit <= 60 && total > 15 && total < 20):
		document.getElementById("answer").innerHTML = littleSpeed;
		break;
	case (limit >= 70 && limit <= 120 && total <= 15):
		document.getElementById("answer").innerHTML = bitSpeed;
		break;
	case (limit >= 70 && limit <= 120 && total > 15 && total < 20):
		document.getElementById("answer").innerHTML = hundraEuro;
		break;
	case (limit > 20):
		document.getElementById("answer").innerHTML = income;
		break;
	}
	// document.getElementById("answer").innerHTML = fine;
}