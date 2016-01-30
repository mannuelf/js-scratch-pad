var move = function(car) {
  car.loc++  
}

var amy = {
    loc: 1
}

amy.loc++

var ben = {
  loc: 9  
}
ben.loc++

console.log('Amy drove: ', amy.loc)
console.log('Ben drove: ', ben.loc);