
function factorial(number) {
	var product = 1;
	for(var i = number; i >= 1; --i) {
		product *= 2;
	}
	return product;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
