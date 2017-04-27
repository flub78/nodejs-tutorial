#!/usr/bin/node
console.log('Json in javascript');

var accountStr = '{ \
	"name":"Jedi", \
	"members": ["Yoda", "Obi Wan"], \
	"location": "A galaxy" \
	}';

var obj = JSON.parse(accountStr);

console.log("str = " + accountStr);

console.log(obj);

var str = JSON.stringify(obj);

console.log("stringified = " + str);

console.log('bye.');


