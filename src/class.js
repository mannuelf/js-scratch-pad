/*
    A class is a blueprint defining or modeling real a world object in code, 
    it characterizes the behaviors of the said real world object.

    A class should be written in camelCase
    each class has two types of variables. CLASS Variables and Instance variables
    class variables point to the same (static) variables across all instances of
*/

let initialAge = -1

function Person(initialAge) {

	var age = initialAge;

	if (age < 0) {
		age = 0;
		console.log("Age is not valid, setting age to 0.");
	}
	this.amIOld = function () {
		switch (true) {
			case (age < 13):
				console.log("You are young.");
				break;
			case (age < 18):
				console.log("You are a teenager.");
				break;
			default:
				console.log("You are old.");
		}
	};

	this.yearPasses = function () {
		return age += 1;
	};
}
Person()
