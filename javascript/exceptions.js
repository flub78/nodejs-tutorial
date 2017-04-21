#!/usr/bin/node
console.log('Exceptions in javascript');

try {
	var x = undefinedVariable;
} catch (excep) {
	console.log("Exception caught: " + excep.name + ": " + excep.message + " line 5");
} finally {
	console.log("That's not so bad");
}

try {
	throw {message: "please replace user", name: "User error"};
} catch (excep) {
	console.log("Exception caught: " + excep.name + ": " + excep.message + " line 13");
} finally {
	console.log("That's not so bad either");
}

console.log('bye.');


