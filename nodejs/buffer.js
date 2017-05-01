#!/usr/bin/node
console.log('Buffers in nodejs');

var b1 = new Buffer(256);

var b2 = new Buffer([0xDE, 0xAD, 0xBE, 0xEF]);

var b3 = new Buffer("Some UTF8 text \u00b6 \u30c6 \u20ac", "utf8");
b1.fill(0);
console.log("b1.length = " + b1.length);
b1.write("Writing in the buffer.");
console.log("b1.length = " + b1.length);
b1.write("Once again."); // write at offset 0
console.log("b1.length = " + b1.length);

console.log("Buffer.length returns the whole size of the buffer, not the last offset");
console.log("See the stream module instead");

console.log(b1.toString());

console.log("Try again");

b1.fill(0);
try {
	b1.write("Writing in the buffer.")
	.write("Once again."); // write at offset 0
} catch  (excep) {
	console.log("Exception caught: buffer write cannot be chained");
} finally {
	console.log(b1.toString());
}


console.log('bye.');


