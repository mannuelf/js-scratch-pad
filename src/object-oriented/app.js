function aHero () {
	return 'Gal ';
}

function aFoil () {
	return 'Cow ';
}

function aDeed () {
	return 'Taps ';
}

var hero = aHero();
var newSaga = function() {
	var foil = aFoil();
	var saga = function() {
		var deed = aDeed();
		console.log(hero+deed+foil);
	};
	saga();
	saga();
};
newSaga();
newSaga();
