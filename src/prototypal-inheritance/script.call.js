Animal = function(name) {
	this.name = name;;
};
Animal.prototype.eats = function() {
	return this.name + ' is eating.';
};

Chordate = function(name) {
	Animal.call(this, name);
};

mike = Chordate;

console.log(mike.eats);
