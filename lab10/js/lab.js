// lab.js - js file for lab 10
// Myles Marr <mmarr@ucsc.edu>
// November 15, 2023

function generateRandomText() {
	const text =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	const min = 3;
	const max = 100;
	const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
	// Get a random starting index to slice the Lorem Ipsum text
	const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
	// Generate the random Lorem Ipsum-like text
	return text.slice(randStart, randStart + randLen);
}
var convoClass = "self";
$("#make-convo").click(function () {
	$("#output").append(
		'<div class="text ' +
			convoClass +
			'"><p>' +
			generateRandomText() +
			"</p></div>"
	);
	convoClass = convoClass === "self" ? "other" : "self";
});
