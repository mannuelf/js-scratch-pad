class User {

	constructor(username, email) {
		this.username = username;
		this.email = email;
	}

	// static method,using spread operator
	static register(...args) {
		console.log(args); // any arguments passed in using spread operator will be an array
		return new User(...args);
	}

	changeEmail(newEmail) {
		this.email = newEmail;
	}

	// accessors. setters and getters.

	get foo() {
		return 'foo';
	}

	set bar() {
		return 'bar';
	}

}

// call directly on constructor
let mannuel = new User('Mannuel Ferreira', 'mannuel@email.com');

// call with static method
let joey = User.register('Joey Jammer', 'Joey@email.com');

mannuel.changeEmail('MannyF@email.co.za');

console.dir(mannuel);
console.dir(mannuel.foo);

