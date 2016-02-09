var Car = function (loc) {
	this.loc = loc;
}

Car.prototype.move = function () {
	this.loc++;
};

var Var = function (loc) {
	// this.loc = loc; // bad duplication
	// new Car(loc); // bad, refers to Car instance and not Van
	// this = new Car(loc); // bad do not asign to a local version of this
	// Car(loc); // bad, doesnt work either
};


var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();
