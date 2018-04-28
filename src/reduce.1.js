let colours = [
    { colour: 'red' },
    { colour: 'blue' },
    { colour: 'green' },
]

let newColours = colours.reduce((previous, colour) => {
    previous.push(colour.colour)

    return previous
}, [])

console.log(newColours)