var Car = function (loc) {

	obj = {
		loc: loc
	};

	obj.move = function () {
		obj.loc++;
	};

	return obj;
}

var amy = Car(1);
amy.move();

var ben = Car(9);
ben.move();
