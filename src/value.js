var theValue = null;

var replaceValue = () => {
	console.log('inside replaceValue');

	var originalValue = theValue;

	console.log(originalValue);

	var unused = () => {
		console.log('inside unsed');
		if (originalValue)
			console.log("I will never be fired");
	};

	theValue = {
		longStr: new Array(1000000).join('*'),
		someMethod: () => { console.log('inside someMethod');}
	};
};

setInterval(replaceValue, 1000);
