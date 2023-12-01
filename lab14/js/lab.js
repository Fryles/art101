// lab.js - js file for lab 14
// Myles Marr <mmarr@ucsc.edu>
// November 30, 2023

// debuggin practice
function constructString(length, charset) {
	var s = ""
	for (var i = 0; i < length; i++) {
		s += charset.charAt(Math.floor(Math.random() * charset.length))
	}
	// STOP HERE
	return s
}

var test = constructString(10, "abcdefghijklmnopqrstuvwxyz")
$("#output").html(test)
// STOP HERE
test = constructString(10, "0123456789")
$("#output").html(test)
// STOP HERE
