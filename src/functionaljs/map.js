// Map

var cars = [
    { make: 'Ferari', year: '2016' },
    { make: 'Porsche', year: '2015' },
    { make: 'Lambourgini', year: '2015' },
    { make: 'Mazzeratti', year: '2016' },
];

var makes = cars.map(function(car) {
    return car.make + ' was released in the year ' + car.year;
});

// arrow functions
var makes2 = cars.map((car) => car.make);

console.log('makes1:', makes);
console.log('makes2', makes2);