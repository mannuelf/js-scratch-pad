// Object type constructors
// create an instance of the Object type and change it wiht properties
// Object type is the top level (root) object
let myObj = new Object()

myObj.value = "my first value"
myObj.method = function() {
	return this.value
}

console.log(myObj.method())

export default myObj;
