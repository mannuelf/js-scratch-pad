
// is called before function declaraion
// will not generate error because of function hoisting
let mannuel = CreatePerson("Mannuel", "Software Engineer");

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
	name: "John"
}
John.job = "Software devloper"
// Object literals have to be called after they are defined.
console.log(John.job)
console.log(John.name)


function CreateCar(carData) {
	let car = {}
	car.name = carData.Name;
	car.model = carData.Model;
	return car
}

let carData = {
	Name: "Porsche",
	Model: "911 GT3"
}

let porsche = new CreateCar(carData)
console.log(porsche)
