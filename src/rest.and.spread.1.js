// 1. REST OPERATOR AND SPREAD OPERATOR

function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return [ 'milk', ...items ]
    }
    return items
}

console.log(
    validateShoppingList('orange', 'bread', 'eggs')
)
