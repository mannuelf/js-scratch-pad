class User {

	constructor(username, email) {
		this.username = username;
		this.email = email;
	}

	changeEmail(newEmail) {
		this.email = newEmail;
	}

}

let mannuel = new User('Mannuel Ferreira', 'mannuel@email.com');

mannuel.changeEmail('MannyF@email.co.za');
console.dir(mannuel);

