#!/usr/bin/node
console.log('routines in javascript');

/*
 * Check if an integer is positive
 */
function is_positive(x) {
	if (x < 0) {
		console.log("" + x + " is negative");
	} else if (x == 0) {
		console.log("" + x + " is 0");		
	} else {
		console.log("" + x + " is positive");
	}
}

is_positive(-1);
is_positive(0);
is_positive(1);

/*
 * Compute a factorial
 */
function fact(n) {
	if (n < 1) {
		return 1
	} else {
		return n * fact (n - 1);
	}
}

console.log('fact(6) = ' + fact(6));

/*
 * Anonymous functions
 */

function doCalc(n1, n2, calcFunction) {
	return calcFunction(n1, n2);
}

function add(n1, n2) {
	return n1 + n2;
}

function subs(n1,n2) {
	return n1 - n2;
}

var a= 3, b=2;

console.log("add() returns " + doCalc(a, b, add));
console.log("subs() returns " + doCalc(a, b, subs));

console.log("mult() returns " + doCalc(a, b, function (n1,n2) {
	return n1 * n2;
}));

// still some difficulties to consider that anonymous function are more readable
// It should be limited to really obvious functions (a few lines) used only once

// Variable scopes

var a = "global";

function writeIt() {
	var a = "local";
	console.log("a = " + a);
	writeMore();
}

function writeMore() {
	console.log("a = " + a);
}

writeIt();

console.log('bye.');


