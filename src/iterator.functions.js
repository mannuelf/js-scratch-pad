function square(num) {
    console.log('square', num, num + num)
}

var nums = [1,2,3,4,5,6,7,8,9,10]

nums.forEach(square)

function isEven(num) {
    return num % 2 == 0
}

var numbers = [2,4,6,8]
var even = nums.every(isEven) 
if (even) {
    console.log('all numbers are even')
} else {
    console.log('numbers not even')
}
