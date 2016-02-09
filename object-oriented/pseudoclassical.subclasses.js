var Car = function (loc) {
	this.loc = loc;
}

Car.prototype.move = function () {
	this.loc++;
};

var Var = function (loc) {
	new Car(loc);
};


var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();
