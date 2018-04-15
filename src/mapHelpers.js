"use strict"

let numbers = [2, 4, 6];
let doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	doubleNumbers.push(numbers[i] * 10);
	// return a new
}
console.log('double with for loop: ', doubleNumbers);

let doubled = numbers.map((number) => {
	return number * 2; // a new array is returned
});
console.log('doubled: ', doubled);

// avoid mutating data
// return a new array
