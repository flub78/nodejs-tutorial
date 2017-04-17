#!/usr/bin/node
console.log('Loops in javascript');

var i = 1;
while (i < 5) {
	console.log('i = ' + i);
	i++;
}

for (i =0; i < 10; i++) {
	var str = "";
	// loop indexes do not need to be pre-declared
	for (j =0; j < 3; j++) {
		str += ".";
	}
	console.log('i = ' + i + " " + str + "\n");
	if (i == 5) break;
}

function is_positive(x) {
	if (x < 0) {
		console.log("" + x + " is negative");
	} else if (x == 0) {
		console.log("" + x + " is 0");		
	} else {
		console.log("" + x + " is positive");
	}
}

console.log('bye.');


