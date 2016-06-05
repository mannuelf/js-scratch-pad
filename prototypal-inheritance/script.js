Animal = function(name) { this.name = name }

Animal.prototype.eats = function() {
	return this.name + " is eating."
}

Chordate = function(name) { this.name = name; }
Chordate.prototype = new Animal();
Chordate.prototype.has_spine = true;

Mammal = function(name) { this.name = name; }
Mammal.prototype = new Chordate();
Mammal.prototype.has_hair = true;
m = new Mammal('dog');

console.log(Animal.eats);
