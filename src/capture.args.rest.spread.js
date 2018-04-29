// 1. REST OPERATOR

// captures any number of arguments passed into the function
function addNumbers(...numbers) {
    return numbers.reduce(function(sum, number) {
        return sum + number
    }, 0)
}

console.log(addNumbers(1,2,3,4,5,6))

// 2. SPREAD OPERATOR
const defaultColors = ['RED', 'GREEN', 'BLUE']
const userFavourites = ['ORANGE', 'PURPLE']
const fallColors = ['fire red', 'fall orange']

console.log(defaultColors.concat(userFavourites))
console.log(['yellow',...fallColors, ...defaultColors, ...userFavourites])