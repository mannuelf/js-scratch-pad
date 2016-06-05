var Person = function(name) {
	this.name = name;
}

person = new Person('Mannuel Ferreira');

INSTANCEOF = function(obj, constructor) {
	if(obj.__proto__ === constructor.prototype) {
		return true
	} else if(obj.__proto__) {
		return INSTANCEOF(obj.__proto__, constructor);
	} else {
		return false;
	}
};

// do not do like this: use the proto chain instead. this creates a new function on each property call. use prototype chain to point to one reusable function
var makeAnimal = function(name) {
	var animal = { name: name };
	animal.eats = function() {
		console.log('eating', this.name);
	};
};
var animal = makeAnimal("Whiskers beef");
// animal.eats();

// do this rather
Person.prototype.eats = function() {};
Person.prototype.speaks = function () {};

var makePerson = function() {
	var person = { name: name };
	person.eats = personEats;
	person.speaks = personSpeaks;
	person.age = personAge;
}

var manny = new Person('MannyF', 'Burgers');
console.log(manny);
manny.eats;
