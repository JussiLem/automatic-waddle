"use strict";

// Create an array with file names of images
let imageNames = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"];
// Use a for loop to show all the images.
for (let i = 0; i < imageNames.length; i++) {

	// Use the document.write() method to write one new image element to the web page per each image.
	document.write("<img src='https://myy.haaga-helia.fi/~swd1ta001/kuvat/" + imageNames[i] + "' alt='Funny shape'>");
}


// https://myy.haaga-helia.fi/~swd1ta001/kuvat/