// Functions as static objects

// defining an object
function MyObjDefinition() {
	MyObjDefinition.myFirstValue = 2;
	MyObjDefinition.mySecondValue = 5;
}

// adding a property to the object
MyObjDefinition.addValues = function() {
	return this.myFirstValue + this.mySecondValue;
};

// initializing the object by calling it as a function
MyObjDefinition();
