var currentNumber = 0;

while (currentNumber <= 12) {
		// console.log(currentNumber);
		currentNumber = currentNumber + 2;
}

var result = 1;
for (var counter = 0; counter < 10; counter = counter +1) {
	result = result *2;
}
// console.log(result);


for (var current = 0; ; current++) {
	if(current % 7 == 0) {
		break;
	}
}
console.log(current);
