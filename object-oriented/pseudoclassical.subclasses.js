var Car = function (loc) {
	this.loc = loc;
}

Car.prototype.move = function () {
	this.loc++;
};

var Var = function (loc) {
	// this.loc = loc; // bad duplication
	// new Car(loc); // bad, will create a new object. refers to Car instance and not new Van instance
	// this = new Car(loc); // bad, do not asign to a local version of this
	// Car(loc); // bad, builds a brand new object that delegates to the Car class, duplicating
	Car.call(this, loc); // invoke Car function such that its parameter 'this' is bound to the van function
};


var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();
