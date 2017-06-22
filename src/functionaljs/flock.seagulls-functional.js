var add = function(flock_x, flock_y) {
	return flock_x + flock_y;
};

var multiply = function(flock_x, flock_y) {
	return flock_x * flock_y;
};

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result = add(
	multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a,flock_b)
);

console.log(result);
