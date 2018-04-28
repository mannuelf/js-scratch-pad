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
