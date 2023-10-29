// lab.js - js file for lab 6
// Myles Marr <mmarr@ucsc.edu>
// October 27, 2023

var myTransport = ["Fuel EX 8 Gen 6", "Honda Element", "Bus"];

var myMainRide = {
	make: "Honda",
	model: "Element",
	color: "Deep Pearl Black",
	year: 2011,
	age: function () {
		return 2023 - this.year;
	},
};

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln(
	"My Main Ride: <pre>",
	JSON.stringify(myMainRide, null, "\t"),
	"</pre>"
);
