var Calc = require('./calc.js');

Calc
	.add(1, 2)
	.multiply(3, 3)
	.equals(function (result) {
		console.log(result);
	});
