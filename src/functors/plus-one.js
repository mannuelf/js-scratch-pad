
// Functors.  Map and Filter are part of the functor family

// Without functors example
/*
function plusOne(value) {
	return value + 1;
}
console.log(plusOne(3));
console.log(plusOne([3,4]));
*/
/*
function plusOne(value) {
	if(Array.isArray(value)) {
		var newArray = [];
		for(var i=0; i < value.length;i++) {
			newArray[i] = value[i] + 1;
		}
		return newArray;
	}

	if(typeof value === 'string') {
		var chars = value.split('');
		var newCharArray = [];
		for(var i=0; i < chars.length; i++) {
			newCharArray[i] =
				String.fromCharCode(
					chars[i].charCodeAt(0) +1
				)
		}
		return newCharArray.join('');
	}
	return value + 1
}
console.log(plusOne('ABC')); // BCD
console.log(plusOne([3,4])); // [4, 5]
*/

// string functor
function stringFunctor(value, fn) {
	var chars = value.split('');
	return chars.map(function(char) {
		return String.fromCharCode(fn(char.charCodeAt(0)))
	}).join("");
}

function plusOne(value) {
	return value + 1;
}

function minusOne(value) {
	return value - 1
}
var mapped = [3,4].map(plusOne);
console.log(mapped);
var abcString = stringFunctor("ABC", plusOne);
console.log(abcString);
var xyzString = stringFunctor("XYZ", minusOne);
console.log(xyzString);

/*
Functors
Array.Filter
Array.map

A Functor is a function that when given a value and  function will unwrap the value into
individual parts, feed those parts into the function that it has been given and take the
return values and return them in structured form.

*/
