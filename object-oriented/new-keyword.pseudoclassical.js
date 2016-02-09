var Car = function(loc) {
	obj.loc = loc;
};

Car.prototype.move = function() {
	this.loc++;
}

var amy = Car(1);
amy.move();

var ben = Car(9);
ben.move();

console.log(amy);
console.log(ben);
