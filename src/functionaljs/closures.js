// Closures
// functions are closures, function body has access to variables that are defined outside the function.

var me = 'Mannuel Ferreira';
greetMe();
function greetMe() {
    console.log('Hello, ' + me + '!');
}

me = 'Batman';
me = 'Radman';
greetMe();
