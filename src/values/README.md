# Does JavaScript pass variables by reference or by value?

```JavaScript
"use strict";

var a;

a = 'Hello World';

function printToConsole(a) {
	a = 'Good bye World';
}

printToConsole(a);

console.log(a);
```

Passing primitive types such strings, numbers &booleans are passed by value.

Objects are passed by reference.

## Passed by value
If you change the value of primitive type inside of a function the value in the outer scope wont change it will still be the same as it was when it passed into the function as an argument.

Passed by value means you are passing a copy of the primitive type.


## Pass by reference
When passing an Object to a function you are not passing in copy you are passing in something that points to the original object in the outer scope.
