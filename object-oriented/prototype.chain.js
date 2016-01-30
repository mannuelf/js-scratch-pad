var gold = { a: 1 }
console.log('gold : ', gold.a);
console.log('gold : ', gold.z);

var blue = (gold);
// blue.b = 2;
// console.log('blue : ', blue.a);
// console.log('blue : ', blue.b);
// console.log('blue : ', blue.z);

var rose = Object.create(gold);
rose.b = 2;
console.log('rose : ', rose.a);
console.log('rose : ', rose.b);
console.log('rose : ', rose.z);

gold.z = 3;
console.log('blue : ', blue.z);

console.log('rose : ', rose.z);