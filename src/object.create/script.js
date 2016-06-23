Animal = {
	init: function(name) {
		this.name = name;
	},
	eats: function() {
		return this.name + " is eating."
	}
}

// do not use object.create, it is too slow to execute
Chordate = Object.create(Animal, {
	has_spine: { value: true }
});

Mammal = Object.create(Chordate, {
	has_hair: { value: true }
});

m = Object.create(Mammal);
m.init('dog');

console.log(m);
