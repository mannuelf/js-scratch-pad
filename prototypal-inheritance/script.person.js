NEW = function(constructor, args) {
		// 01. create new object
	// 02. set the new object's __proto__ to constructor prototype
	// 03. invoke our constructor with out new object's as context
	// 04. return our new object

	var o = {};
	o.__proto__ = constructor.prototype;
	constructor.apply(o, args);

	return o;
}

INSTANCE = function(obj, constructor) {

}


/*
	*	NEW keyword
	* Creates a new object
	*	Sets object's __proto__ to the prototype of the constructor
	* Runs constructor
	* If constructor returns an object:
	*	- Return constructor's return value
	*	-	Otherwise return the newly created object
	*/
