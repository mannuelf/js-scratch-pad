// function *numbers() {
// 	// * indicates that the function is a generator
// 	// allows a function to pause, and allows a callback to resume it.
// 	console.log('Begin');
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// let iterator = numbers();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


function * range(start, end) {
	yield start;
}

iteratorTwo = range(1, 5);
console.log(iteratorTwo.next());
console.log(iteratorTwo.next());
