// Super class constructor
var Car = function (loc) {
	this.loc = loc.valueOf();
};

Car.prototype.move = function () {
	this.loc++;
};

// sub class constructor
var Van = function (loc) {
	// this.loc = loc; // bad duplication
	// new Car(loc); // bad, will create a new object. refers to Car instance and not new Van instance
	// this = new Car(loc); // bad, do not asign to a local version of this
	// Car(loc); // bad, builds a brand new object that delegates to the Car class, duplicating
	Car.call(this, loc); // invoke Car function such that its parameter 'this' is bound to the van function
};

Van.prototype = Object.create(Car.prototype); // prototype delegation without running the constructor function in process
// Van.prototype = new Car(); // wrong.

Van.prototype.constructor = Van; // add a coreeclty linked constructor to Van
Van.prototype.grab = function () {

};



var zed = new Car(3);
zed.move();
console.log('zed:', zed.loc);

var amy = new Van(9);
amy.move();
amy.grab();
console.log('amy:', amy.loc);
console.log('amy constructor', amy.constructor);
