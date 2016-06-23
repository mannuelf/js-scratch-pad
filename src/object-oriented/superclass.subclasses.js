// constructor function
var Car = function () {
	var obj = { loc: loc };
	obj.move = function () {
		obj.loc++;
	};
	return obj;
}

// sub classes, call on Car function to get default properties
var Van = function (loc) {
	var obj = Car(loc);
	obj.grab = function () {

	};
}

var Cop = function (loc) {
	var obj = Car(loc);
	obj.call = function () {

	};
};

var amy = Van(1);
amy.move();

var ben = Van(9);
ben.move();

var cal = Cop(2);
cal.move();
cal.call();
