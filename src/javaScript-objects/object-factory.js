// is called before function declaraion
// will not generate error because of function hoisting
let mannuel = CreatePerson('Mannuel', 'Software Engineer');

// Object Factory design pattern
function CreatePerson(personName, PersonJob) {
	let person = new Object() || {};
	person.name = personName;
	person.job = PersonJob;

	return person;
}

console.log(mannuel.name);
console.log(mannuel.job);
console.log(mannuel);

let John = {
	name: 'John'
};
John.job = 'Software devloper';
// Object literals have to be called after they are defined.
console.log(John.job);
console.log(John.name);

function CreateCar(carData) {
	let car = {};
	car.name = carData.Name;
	car.model = carData.Model;
	return car;
}

let carData = {
	Name: 'Porsche',
	Model: '911 GT3'
};

let porsche = new CreateCar(carData);
console.log(porsche);

// the this keyword is a reference to an object, this reference
// changes depending on context, in this example this
// has global context
function Person() {
	this.name = 'Manny Ferreira';
	this.job = 'Software Engineer';
}

Person();

console.log(window.name);
console.log(window.job);
// in node env we have created two properties on the global objec

function CreateBike(bikeData) {
	this.name = bikeData.Name;
	this.model = bikeData.Model;
}
// the this will refer to the instance of bike, not the global or browser global context.

let bikeData = {
	Name: 'Kawasaki',
	Model: 'Ninja'
};

let bikeTwoData = {
	Name: "Aprilia",
	Model: "RSV4 RF"
}

let kawasaki = new CreateBike(bikeData);
console.log('kawasaki')
console.log(kawasaki.name)
console.log(kawasaki.model)

let aprilia = new CreateBike(bikeTwoData)
console.log(aprilia)
console.log(aprilia.name)
console.log(aprilia.model)

let name = "The global/window object"
let myOwnObject = {
	name: "my own object",
	getName: function() {
		return this.name
	}
}
console.log(myOwnObject.getName())
console.log((myOwnObject.getName = myOwnObject.getName)());


var name = "The window global";
var myOwnObject = {

  name: "My Own Object",

  getName: function(){
    var that = this; // changes context of this from global to this anonymous inner function
    return function(){
      return that.name;
    };
  }
};

console.log(myOwnObject.getName()()); // displays "My Own Object"
