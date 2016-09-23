// Higer order functions
// filter accepts 1 argument , another function also known as a call back function. 
// filter is a method on the array object that takes a function as an argument and filters on that array.
// higher order functions are composable they can be passed around into each other and reused

var cars = [
    { make: 'Ferari', year: '2016' },
    { make: 'Porsche', year: '2015' },
    { make: 'Lambourgini', year: '2015' },
    { make: 'Mazzeratti', year: '2016' },
];

var isFerari = function(car) {
    return car.make === 'Ferari';
}
var feraris = cars.filter(isFerari);

// old way: for loop
/*
var feraris = [];
for (var i = 0; i < cars.length; i++) {
    if (cars[i].make === 'Ferari')
        feraris.push(cars[i])
}
*/

console.log(feraris);