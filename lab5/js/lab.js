// lab.js - js file for lab 5
// Myles Marr <mmarr@ucsc.edu>
// October 25, 2023


var make = "Honda";
var model = "Element";
var color = "Deep Pearl Black";
var year = 2011;
var ownIt = true;
var age = new Date().getFullYear() - year;

document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years <br>");
document.writeln("Own it: " + ownIt + "<br>");
