// lab.js - js file for lab 7
// Myles Marr <mmarr@ucsc.edu>
// October 31, 2023

function sortName() {
	var userName = window.prompt("Please enter your name: ");
	userName = userName.split("").sort().join("");
	return userName;
}

document.writeln("Heres your new name!<br> ", sortName());
