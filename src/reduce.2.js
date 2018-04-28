// given a string are teh expressions equally balanced

function balancedParens(string) {
    // turn string into an array with split()
    return !string.split("").reduce((prev, char) => {
        if ( prev < 0 ) { return prev }
        if ( char === "(" ) { return ++prev }
        if ( char === ")") { return --prev }
        return prev
    }, 0); 
}

console.log(balancedParens(")("))