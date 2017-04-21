#!/usr/bin/node
console.log('Objets in javascript');

var x = new Number("5");

x = new Number(5); // there is also a constructor from integer
console.log("x = " + x)
console.log("x.constructor = " + x.constructor.toString());

var y = 5;
console.log("y.constructor = " + y.constructor.toString());

var obj1 = {
	name : "titi",
	value : 7,
	id : function() {
		return this.name + " .. " + this.value
	}
}
console.log("obj1.id = " + obj1.id())

var name = obj1.nom;
console.log("obj1.nom = " + name
		+ " // undefined is returned if the attribute does not exist");

// Usage of a constructor
function User(first, last) {
	this.first = first;
	this.last = last;
	this.name = function() {
		return this.first + " " + this.last
	}
}

var user1 = new User("Jean", "Dupont");
var user2 = new User("Pascal", "Martin");

console.log("user1.name() = " + user1.name());
console.log("user2.name() = " + user2.name());
console.log("user2.name = " + user2.name);

// Prototyping object Pattern
// With prototyping, included functions are included only once when the
// javascript program
// is loaded, instead of each time that an object is created.
function UserP(first, last) {
	this.first = first;
	this.last = last;
}
UserP.prototype = {
	id : function() {
		return this.first + " " + this.last;
	}
}

var userA = new UserP("Jean", "Dupont");
var userB = new UserP("Pascal", "Martin");

console.log("userA.id() = " + userA.id());
console.log("userB.id() = " + userB.id());
console.log("userB.name = " + userB.name);

console.log('bye.');
