#!/usr/bin/node
console.log('Unit test in javascript');

// The problem is to select a unit test framework simple and flexible enough
// There is a huge number of them
// Let start with unitjs
// http://unitjs.com/guide/quickstart.html

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

assert (true, "true is true");
assert (false, "false is true");

console.log('bye.');


