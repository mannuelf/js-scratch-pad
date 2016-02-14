// JavaScript Testing

// Pass => Expect 2 + 3 = 5
// Pass => Expect an error if non numbers are passed
// Fail => Expect 0.1 + 0.2 = 0.3

function add (x, y) {

	var result;
	if (typeof x && typeof y !== 'number') {
		throw new Error('Parameters must be numbers');
	}

	result = x + y;
	if (parsInt(result) != result) {
		result = parseFloat(result.toFixed(1));
	}
	return result;
}
