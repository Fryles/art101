// lab.js - js file for lab 15
// Myles Marr <mmarr@ucsc.edu>
// December 1, 2023

// cheap attempt to hide it...
var toke = "P3Rva2VuPTIzMWJhN2M4YjRlOTVh"
// to get country name from country code
var getCountryNames = new Intl.DisplayNames(['en'], {type: 'region'});

function getUserAgent() {
	var agent = "";
		if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
			agent = ('Opera');
		} else if (navigator.userAgent.indexOf("Edg") != -1) {
			agent = ('Edge');
		} else if (navigator.userAgent.indexOf("Chrome") != -1) {
			agent = ('Chrome');
		} else if (navigator.userAgent.indexOf("Safari") != -1) {
			agent = ('Safari');
		} else if (navigator.userAgent.indexOf("Firefox") != -1) {
			agent = ('Firefox');
		} else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
		{
			agent = ('Internet Explorer??!!!');
	}
	return agent;
	}

function getOS() {
	var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
	if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
	return OSName;
}

$("#activate").click(function () {
			//validate name
		if ($("#name").val().length < 1) {
			console.log("Error: name is empty");
			return;
		} else if ($("#name").val().indexOf(" ") >= 0) {
			console.log("Error: name contains spaces");
			return;
	}

	var ipAPI = $.ajax({
		url: "https://ipinfo.io/json"+atob(toke),
		type: "GET",
		dataType: "json",
	});

	var ageAPI = $.ajax({
			url: "https://api.agify.io?name=" + $("#name").val(),
			type: "GET",
			dataType: "json",
		});

	var genAPI = $.ajax({
			url: "https://api.genderize.io?name=" + $("#name").val(),
			type: "GET",
			dataType: "json",
		});

	var natAPI = $.ajax({
			url: "https://api.nationalize.io?name=" + $("#name").val(),
			type: "GET",
			dataType: "json",
	});

	$.when(ipAPI, genAPI, ageAPI, natAPI).done(function (ip, gen, age, nat) {
		//check success
		console.log(ip[0]);
		console.log(gen[0].gender);
		console.log(age[0].age);
		console.log(getCountryNames.of(nat[0].country[0].country_id));
		$("#ip").text(ip[0].ip);
		$("#os").text(getOS());
		$("#loc").text(ip[0].city);
		$("#gen").text(gen[0].gender);
		$("#age").text(age[0].age);
		$("#nat").text(getCountryNames.of(nat[0].country[0].country_id));
		$("#browser").text(getUserAgent());
		$("#output").show();
	});
});


