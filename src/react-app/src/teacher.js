import { Person } from "./person";

export function promote() {
	console.log("promoting the course");
}

export default class Teacher extends Person {
	constructor(name, degree) {
		super(name); // call the parent class
		this.degree = degree;
	}
	teach() {
		console.log("teach");
	}
}

