var gold = { a: 1 }
console.log(gold.a);
console.log(gold.z);

var blue = extend({}, gold);
blue.b = 2;
console.log(blue.a);