// lab.js - js file for lab 13
// Myles Marr <mmarr@ucsc.edu>
// November 25, 2023

var s = ""
for (var i = 1; i < 200; i++) {
	if (i % 3 == 0) {
		s += "Fizz"
	}
	if (i % 5 == 0) {
		s += "Buzz"
	}
	if (i % 7 == 0) {
		s += "Boom"
	}
	if (i % 7 == 0 || i % 5 == 0 || i % 3 == 0) {
		s += "!<br>"
}
}

	document.getElementById("output").innerHTML = s
