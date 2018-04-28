let computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Acer', ram: 32 },
    { name: 'Mecer', ram: 8 },
    { name: 'Toshiba', ram: 16 }
]

let allComputersCanRunProgram = true
let onlySomeComputersCanRunProgram = false

// if one element returns false, the whole function will return false
computers.every((computer) => { // pass in iterator function
    return computer.ram > 16
})

allComputersCanRunProgram
console.log('can run:', allComputersCanRunProgram)

// returns true if all computers
onlySomeComputersCanRunProgram
console.log('can run:', onlySomeComputersCanRunProgram)