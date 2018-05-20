function join(array1, array2) {
	return [...array1, ...array2];
}

function unshift(array, ...numbers) {
	return [...numbers, ...array];
}
   
unshift([1,2,3,4,5], 1,2,3,4,5,6,7);

function unshift(array, ...numbers) {
	return numbers.concat(array)
}
unshift([1,2,3,4,5], 1,2,3,4,5,6,7);