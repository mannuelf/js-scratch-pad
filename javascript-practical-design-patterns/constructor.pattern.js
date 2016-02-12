// the 'new' keyword
// creates a brand new objec
// links to an object prototype
// binds 'this' to the new object scope
// it actually returns this.

function ObjectName(param1, param2) {
	this.param1 = param1;
	this.param2 = param2;
	this.toString = function () {
		return this.param1 + ' ' + this.param2;
	}
}
