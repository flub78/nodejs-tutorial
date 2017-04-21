#!/usr/bin/node
console.log('Strings in javascript');

var str = "Teach yourself JQuery and JavaScript in 24 hours";

console.log("str = " + str);
console.log("str.length = " + str.length);
console.log("str.charAt(6) = " + str.charAt(6)); // y
console.log("str.toLowerCase() = " + str.toLowerCase());

var t = "12:10:36";
var tArray = t.split(':');

for (i = 0; i < tArray.length; i++) {
	console.log("" + i + " - " + tArray[i]);
}
console.log('bye.');
