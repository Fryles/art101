// lab.js - js file for lab 12
// Myles Marr <mmarr@ucsc.edu>
// November 21, 2023

//https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
String.prototype.hashCode = function () {
	var hash = 0,
		i,
		chr;
	if (this.length === 0) return hash;
	for (i = 0; i < this.length; i++) {
		chr = this.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};

function sortingHat(str) {
	var mod = str.hashCode() % 4;
	if (mod == 0) {
		return "Gryffindor";
	} else if (mod == 1) {
		return "Ravenclaw";
	} else if (mod == 2) {
		return "Slytherin";
	} else if (mod == 3) {
		return "Hufflepuff";
	}
}

$("#button").click(function () {
	var name = $("#input").val();
	var house = sortingHat(name);
	$("#output").html(
		"<p>The Sorting Hat has sorted you into <b>" + house + "</b>!</p>"
	);
});

$("#input").keyup(function (event) {
	if (event.keyCode == 13) {
		$("#button").click();
	}
});
