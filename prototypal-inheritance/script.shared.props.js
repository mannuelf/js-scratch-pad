Animal = function() {
	this.offspring = [];
}

Dog = function() {}
Dog.prototype = new Animal();

console.log(Animal);
