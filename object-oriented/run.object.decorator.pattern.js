var amy = Car(1)
amy.move()

var ben = Car(9)
ben.move()

console.log('Amy drove:', amy.loc)
console.log('Ben drove:', ben.loc)
console.log(Car.prototype.constructor)
console.log(amy.constructor)
console.log(amy instanceof Car);