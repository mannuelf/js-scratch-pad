let numbers = [10,20,30]
let sum = 0

// old school for loop
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log('sum:', sum)

// with reduce
let multiplier = numbers.reduce((sum, number) => {
    return sum + number
}, 0)

console.log('multiplier:', multiplier)


let trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

let totalDistance = trips.reduce((previous, trip) => {
    return previous += trip.distance;
}, 0);

totalDistance();


var deskTypes = desks.reduce(({ sitting, standing }, { type }) => {
    if (type === 'standing') standing++;
    if (type === 'sitting') sitting++;
    return { sitting, standing };
}, { sitting: 0, standing: 0 });