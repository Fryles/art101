// lab.js - js file for lab 9
// Myles Marr <mmarr@ucsc.edu>
// November 10, 2023

$(".minor-section").append("<button >Go crazy go stupid</button>");
$(".minor-section button").click(function () {
	$(this).parent().toggleClass("special");
});
