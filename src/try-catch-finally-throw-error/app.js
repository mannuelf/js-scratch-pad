"use strict;"

console.log('...then the execution continues');


let json = '"age": 30';

try {
	let user = JSON.parse(json);
	if (!user.name) {
		throw new SyntaxError("Incomplete data: no name");
	}

	console.log(user.name);
} catch(e) {
		console.log("JSON Error: " + e.message);
}
