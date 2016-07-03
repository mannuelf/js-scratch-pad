function addIt(runningTotal, currentValue) {
    return runningTotal + currentValue
}

var digits = [1,2,3,4,5,6,7,8,10]
var sumOf = digits.reduce(addIt)

addIt(2,2)
console.log(addIt)
