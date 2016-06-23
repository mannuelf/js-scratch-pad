
function showScope() {
	scope = 'local';
	return scope;
}

var scope = 'global';

console.log('I am', scope);
console.log('I am', showScope());
