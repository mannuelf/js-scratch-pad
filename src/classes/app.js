function User(username, email) {
	this.username = username;
	this.email = email;

	/*
	this.changeEmail = function () {
		   Do not usea function like this not performent.
		   setting function here will redeclare and redefined for every single instance of console-adjacent-user-command-result
		   instead it is better to attach this method to the prototype so that each new instance of User will share this changeEmail method
	}
	*/
}

// attach to the prototype so that every instance of User will share the changeEmail method.
User.prototype.changeEmail = function(newEmail) {
	this.email = newEmail;
}

User.prototype.changeName = function(newUserName) {
	this.username = newUserName;
}

var mannuel = new User('Mannuel Ferreira', 'mannuel@email.com');

mannuel.changeEmail('manny@email.com');
mannuel.changeName('Joey');
console.dir(mannuel);
