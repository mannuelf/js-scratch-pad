var Dog = function() {
    return {leg: 4, bark: alert }
}

var fido = Dog()

console.log(fido instanceof Dog);