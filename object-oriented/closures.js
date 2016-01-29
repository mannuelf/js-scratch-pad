function aHero () {
	return 'Gal ';
}

function aFoil () {
	return 'Cow ';
}

function aDeed () {
	return 'Taps ';
}

var sagas = []; // global array to push saga functions into the sagas array
var hero = aHero();
var newSaga = function () {
	var foil = aFoil();
	sagas.push(function() {
		var deed = aDeed();
		console.log(hero+deed+foil);
	});
};
newSaga();
sagas[0]();
sagas[0]();

newSaga();
sagas[1]();
