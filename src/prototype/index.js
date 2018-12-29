let empty_object = {};

let stooge = {
	first_name: 'Jerome',
	last_name: 'Howard'
};

let flight = {
	airline: 'Iceanic',
	number: 815,
	departure: {
		IATA: 'SYD',
		time: '2018-10-10 17:34',
		city: 'Sydney'
	},
	arrival: {
		IATA: 'CPT',
		time: '2018-10-11 23:34',
		city: 'Johannesburg'
	}
};

console.log(stooge['first_name']);

if (typeof Object.create !== 'function') {
	Object.create = function(o) {
		let F = function() {};
		F.prototype = o;
		console.log(F);
		return new F();
	};
}

let another_stooge = Object.create(stooge);

another_stooge['first_name'] = 'Harry';
another_stooge['middle_name'] = 'Moses';
another_stooge.nickname = 'Moe';

typeof flight.number;
typeof flight.status;
typeof flight.arrival;
typeof flight.manifest;

console.log('number: ', typeof flight.number);
console.log('status: ', typeof flight.status);
console.log('arrival: ', typeof flight.arrival);
console.log('toString: ', typeof flight.toString);
console.log('constructor: ', typeof flight.constructor);

flight.hasOwnProperty('number');
flight.hasOwnProperty('constructor');

console.log(flight.hasOwnProperty('number'));
console.log(flight.hasOwnProperty('constructor'));

// enumareration
let name;
for (name in another_stooge) {
	if (typeof another_stooge['name'] !== 'function') {
		console.log(name);
		document.writeln(name + ': ' + another_stooge[name]);
	}
}

let i;
let properties = [ 'first_name', 'middle_name', '	last_name', 'profession' ];
for (i = 0; i < properties.length; i += 1) {
	document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
}

let MYAPP = {};

MYAPP.stooge = {
	first_name: 'Jerome',
	last_name: 'Howard'
};

MYAPP.flight = {
	airline: 'Iceanic',
	number: 815,
	departure: {
		IATA: 'SYD',
		time: '2018-10-10 17:34',
		city: 'Sydney'
	},
	arrival: {
		IATA: 'CPT',
		time: '2018-10-11 23:34',
		city: 'Johannesburg'
	}
};
