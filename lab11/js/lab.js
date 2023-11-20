// lab.js - js file for lab 11
// Myles Marr <mmarr@ucsc.edu>
// November 18, 2023

function sortString(inputString) {
	// We have to convert our string to an array and back again to sort it
	return inputString.split("").sort().join("");
}

$("#submit").click(function () {
	const userName = $("#user-name").val();

	userNameSorted = sortString(userName);

	$("#output").html('<div class="text"><p>' + userNameSorted + "</p></div>");
});
