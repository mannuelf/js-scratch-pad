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

It forces you 