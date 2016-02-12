var obj = {};

obj.param = 'hello there, from object one';

console.log(obj.param);


var objTwo = {};
objTwo['param'] = 'I am object two';

console.log(objTwo['param']);

var objThree = {};
var val = 'Hello from obj three';
objThree[val] = 'its still me obj three';
console.log(objThree[val]);
