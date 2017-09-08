# What is strict mode

Strict mode allows you to operate a function or a peice of code in a strict environment.

It makes debugging easier.
code errors do not fail silently.

You enable strict mode by adding `"use strict";` in the javascript file. You may also use strict mode in a functions' scope, applying the strict mode environment to a function like this.

```JavaScript
// not strict mode
function helloWorld() {
	"use strict";
	// strict mode
	console.log('Hello World');
}
```

In strict mode using a variable before it has been defined causes an error.

It prevents you accidental globals and spelling/typo errors.

It also prevents you from using reserved words that will be used in future version of JavaScript.

You cannot delete a functions, variables or function arguments.
```
"use strict";
function goLeft(arg){
	delete arg;
}
X Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
```

eval keyword lets you evaluate JavaScript expressions by passing in a string. the use strict keyword makes using eval a bit safer.

