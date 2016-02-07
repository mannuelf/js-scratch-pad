
// Conways Game of Life
//
var __slice = [].slice;

function extend () {
	var consumer = arguments[0],
	providers = __slice.call(arguments, 1),
	key,
	i,
	provider;

	for (i = 0; i < providers.length; ++i) {
		providers = providers[i];
		for (key in providers) {
			if (provider.hasOwnProperty(key)) {
				consumer[key] = provider[key];
			};
		};
	};
	return consumer;
};

var Univers = {

	numberOfNeighbours: function (location) {

	}

};

var Alive = 'alive',
		Dead  = 'dead';

var Cell = {
	numberOfNeighbours: function () {
		return Univers.numberOfNeighbours(this.location);
	},

	statInNextGeneration: function () {
		if (this.state === alive) {
			return (this.numberOfNeighbours() === 3)
			? Alive
			: Dead;
		} else {
			return (this.numberOfNeighbours() === 2) || this.numberOfNeighbours() === 3)
			? Alive
			: Dead;
		}
	}
}

var someCell = extend({
	state: Alive,
	location: {
		x: -15,
		y: 12
	}
}, Cell);
