var gold = { a: 1 }
console.log(gold.a);
console.log(gold.z);

var blue = (gold);
// blue.b = 2;
// console.log(blue.a);
// console.log(blue.b);
// console.log(blue.z);

var rose = Object.create(gold);
rose.b = 2;
console.log(rose.a);
console.log(rose.b);
console.log(rose.z);

gold.z = 3;
console.log(blue.z);