let computers = [
    "Apple",
    "Mecer",
    "Toshiba",
    "Packard Bell",
    "Hewlett Packard",
]

let everyGt4 = computers.every((name) => {
    return computers.length > 5
})

let someGt4 = computers.some((name) => {
    return computers.length > 5
})

console.log(everyGt4)
console.log(someGt4)
