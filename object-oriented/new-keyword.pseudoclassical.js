// Constrcutor function, speficy how each instance should be differnet
var Car = function(loc) {
	obj.loc = loc;
};

// specify how all instance of a class should be similar
Car.prototype.move = function() {
	this.loc++;
}

var amy = Car(1);
amy.move();

var ben = Car(9);
ben.move();

console.log(amy);
console.log(ben);
