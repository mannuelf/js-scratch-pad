// javascript functions first class objects, a function is an object
// functions as object constructors (Classes)
 function AddTwoValues() {
	 let firstValue = 10;
	 let secondValue = 20;

	 this.addValues = function () {
		 return firstValue + secondValue
	 }
 }

 let adder = new AddTwoValues()

 console.log(adder.addValues())
