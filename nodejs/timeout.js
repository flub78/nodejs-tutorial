#!/usr/bin/node
console.log('Timeout in javascript');

function simpleTimeout(consoleTimer) {
	console.timeEnd(consoleTimer);
}

console.time("two Seconds");
setTimeout(simpleTimeout, 2000, "two Seconds");

console.time("one Second");
setTimeout(simpleTimeout, 1000, "one Second");

console.time("500 milli");
setTimeout(simpleTimeout, 500, "500 milli");

console.time("five Seconds");
setTimeout(simpleTimeout, 5000, "five Seconds");

console.log('bye.');


