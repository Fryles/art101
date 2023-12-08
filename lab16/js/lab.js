// lab.js - js file for lab 16
// Myles Marr <mmarr@ucsc.edu>
// December 7, 2023



$.ajax({
	url: "https://xkcd.vercel.app/?comic=latest", //this url is a proxy to bypass CORS
	// easier and safer than using a chrome extension imo
	type: "GET",
	dataType: "json",
	success: function (data, status) {
		console.log(data);
		$("#output").html("<h3>" + data.title + "</h3><img src='" + data.img + "' alt='" + data.alt + "' title='" + data.alt + "'>");
	},
	error: function (status) {
		console.log(status);
	}
});