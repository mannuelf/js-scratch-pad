let mealCost = 12.00
let tipPercent = 20
let taxPercent = 8

function totalCost(mealCost, tipPercent, taxPercent) {
    let tip = mealCost * (tipPercent/100)
    let tax = mealCost * (taxPercent/100)

    let calculation = mealCost + tip + tax

    let totalMealCost = Math.round(calculation)

    return totalMealCost
}

let totalMealCost = totalCost(mealCost, tipPercent, taxPercent)

console.log("The total meal cost is " + totalMealCost + " dollars.")
