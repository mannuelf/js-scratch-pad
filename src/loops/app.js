var currentNumber = 0;

while (currentNumber <= 12) {
	// console.log(currentNumber);
	currentNumber = currentNumber + 2;
}

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1) {
	// init the loop with variable; condition of loop; update the state of the variable
	result = result * 2;
}
// console.log(result);

// find the first number that is greater than 20 and divisible by 7
for (var current = 20; ; current++) {
	if (current % 7 == 0) {
		break;
	}
}
// console.log(current);

// can also be written also be written as:
for (var current = 20; current % 7 != 0; current++);
console.log(current);

// Updating variables succinctly
// Dispatching on a value
if (variable == 'value1') {
	action1();
} else if (variable == 'value2') {
	action2();
} else if (variable == 'value3') {
	action3();
} else {
	defaultAction();
}
// can be written as a switch statement
switch(promt('what is the weather like?')) {
	case 'rainy':
	console.log('Remember to bring an umbrella');
	break;
	case 'sunny':
	console.log('brin sun screen');
	break;
}