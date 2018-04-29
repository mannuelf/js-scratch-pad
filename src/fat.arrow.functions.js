// 1
const add = (a, b) =>  {
    return a + b
}

add(1,2)

// 2
let double = function(number) {
    return 2 * number
}

let double = (number) => {
    return 2 * number
}

let double = (number) => 2 * number

let double = number => 2 * number

double(8)

// 3
const numbers = [1,2,3]

numbers.map(function(number) {
    return 2 * number
})

numbers.map((number) => {
    return 2 * number
})