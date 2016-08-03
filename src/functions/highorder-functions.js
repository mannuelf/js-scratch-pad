var phones = [
	{ name: 'Nokia', model: 'MZ4', os: 'Microsoft' },
	{ name: 'Samsung', model: 'S7', os: 'Android' },
	{ name: 'Meizu', model: 'MXPRO5', os: 'Android' },
	{ name: 'iPhone', model: '6', os: 'IOS' },
	{ name: 'iPhone', model: '6S', os: 'IOS' },
	{ name: 'Huawie', model: 'Ascend P7', os: 'Android' },
];

// non functional way
var androids = [];
for (var i = 0; i < phones.length; i++) {
	if (phones[i].os === 'Android') {
		androids.push(phones[i]);
	}
}

var isIphone = function(phones) {
	return phones.os === 'IOS'
}

// functional way
var applephones = phones.filter(isIphone);

console.log('Androids\n', androids);
console.log('iPhones\n', applephones);
