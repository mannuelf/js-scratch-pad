function capitlizeAndLogAllArguments(str) {
	console.log(arguments.length + " arguments to be logged!");

	arguments.map((a) => {
		console.log( a.toUppCase() );
	})
}

capitlizeAndLogAllArguments('basketball', 'soccer', 'basketball', 'tennis');
