let obj = {}

// create a varaible initialised to an objec
let myObj = {
	myFirstObjValue: 1,
	mySecondObjValue: 2,

	addValue: function () {
		return this.myFirstObjValue + this.mySecondObjValue
	}
}

console.log(myObj.addValue())
