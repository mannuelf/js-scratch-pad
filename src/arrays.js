
var numbers = ['1','2','3','4','5']

// array constructor
var numbers2 = new Array(6,7,8,9,10,11)

var numbers3 = '4'
var numbers4 = ['1','2','3']

console.log('arrays:', numbers.length, numbers2.length)
console.log('numbers3: is it an array?', Array.isArray(numbers3))
console.log('numbers4: is it an array?', Array.isArray(numbers4))
