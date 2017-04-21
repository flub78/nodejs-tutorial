#!/usr/bin/node
console.log('Arrays in javascript');

// This is a comment

/* this too
 * 
 */

var arr =['one', 'two', 'three'];
var head = arr[0];
var tail = arr[2];
for (i = 0; i < arr.length; i++) {
	console.log('arr[' + i + '] = ' + arr[i])
}

// Hash
var dict = {'name' : 'Brad', 'occupation' : 'hacker'};
console.log("dict = " + dict )
console.log("dict.name = " + dict.name )
for (var key in dict) {
	console.log('dict[' + key + '] = ' + dict[key]);
}

var dict = null;
console.log("dict = " + dict )

console.log('bye.');


