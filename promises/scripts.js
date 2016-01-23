

// the promise constructor takes one argument, a callback with two parameters 'resolve' and 'reject'
var promise = Promise(function(resolve, reject) {
	// do something, async or otherwise
	if ( everything_turned_out_fine === true ) {
		resolve('stuff worked!');
	} else {
		reject(Error('it broke'));
	}
});

// then takes two arguments, a callback for success case and another for faluire case
promise.then(function(result) {
	console.log(result);
}, function(error) {
	consol.log(error);
});
