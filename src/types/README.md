# What are the different types in JavaScript

```
Boolean // true/false
Number // 1, 1.0
String // "a", 'a'
Null // null
Undefined // undefined

Object //  {}
```

You can use the `typeof` function to see what type of value it is.

```JavaScript
console.log(typeof(1));
console.log(typeof('FC Porto'));
console.log(typeof(true));
console.log(typeof(undefined));
console.log(typeof(null));
```

# Whats the difference between statically typed language (Java) and dynamically typed language like JavaScript?

In Java the type of variable is defined statically when we write the code in the application.
```Java
String a = 'car';
a =1; // error
```

The type of the value of a is inferred by the value in the variable. The type of variable is determined dynamically at run time.
```JavaScript
var a = 'car';
typeof(a); // string
a = 1;
typeof(a); // integer
```

In JavaScript `null` is a value and `undefined` is a value
