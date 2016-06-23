// example 1

var total = 0;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for ( var i = 0; i < numbers.length; i++ ) {
	total += numbers[i];
}

console.log('Example 1:', numbers);

// example 2
var message = '';
var words = ['reducing ', 'is ', 'simple'];
for (var i = 0; i < words.length; i++) {
	message += words[i];
}
console.log('Example 2:', message);

// example 3
var sum = [1, 2, 4].reduce(
	function(total, num) {
		return total + num;
	}, 0);

console.log('Example 3:', total);
