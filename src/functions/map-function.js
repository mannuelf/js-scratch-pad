var phones = [
	{ name: 'Nokia', model: 'MZ4', os: 'Microsoft' },
	{ name: 'Samsung', model: 'S7', os: 'Android' },
	{ name: 'Meizu', model: 'MXPRO5', os: 'Android' },
	{ name: 'iPhone', model: '6', os: 'IOS' },
	{ name: 'iPhone', model: '6S', os: 'IOS' },
	{ name: 'Huawie', model: 'Ascend P7', os: 'Android' },
	{ name: 'Nexus', model: 'S6', os: 'Android' },
];

// non functional way
var names = [];
for (var i = 0; i < phones.length; i++) {
	names.push(phones[i].name);
}

// functional way
var names2 = phones.map(function(phones) {
	return phones.name;
});

var namesAndOs = phones.map(function(phones) {
	return phones.name + ' is a ' + phones.os;
});

var namesArrowFunction = phones.map((phones) => phones.name);

console.log('Non Functional: Names\n', names);
console.log('Functional: Names\n', names2);
console.log('Functional: NamesAndOs\n', namesAndOs);
console.log('Arrow Function: NamesAndOs\n', namesArrowFunction);
