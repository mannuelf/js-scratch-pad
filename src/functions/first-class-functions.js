var hi = function(name) {
	return 'Hiiiiii ' + name;
}

var greeting = function(name) {
	return hi(name);
}

console.log(hi('Manny F'));
console.log(greeting("Manny"));

/************************************************************/


// BAD
var getServerStuff = function(callback) {
	return ajaxCall(function(json) {
		return callback(json);
	});
};

// GOOD
var getServerStuff = ajaxCall;

/************************************************************/

// This line
return ajaxCall(function(json) {
	return callback(json);
});

// is the same as this line
return ajaxCall(callback);

// which isequivalent to this
var getServerStuff = ajaxCall;
