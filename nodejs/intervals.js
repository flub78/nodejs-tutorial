#!/usr/bin/node
console.log('Intervals in javascript');

var iterations = 0;

var watchDogInterval = setInterval(watchdog, 2000);

function watchdog() {
	console.log("watchdog: " + iterations);
	++iterations;
	if (iterations == 10) {
		clearInterval(watchDogInterval);
	}
}


console.log('bye.');


