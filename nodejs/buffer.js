#!/usr/bin/node
console.log('Buffers in nodejs');

var b1 = new Buffer(256);

var b2 = new Buffer([0xDE, 0xAD, 0xBE, 0xEF]);

var b3 = new Buffer("Some UTF8 text \u00b6 \u30c6 \u20ac", "utf8");
b1.fill(0);
b1.write("Writing in the buffer.");
b1.write("Once again."); // write at offset 0

console.log(b1.toString());

console.log('bye.');


