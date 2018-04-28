let computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Acer', ram: 32 },
    { name: 'Mecer', ram: 8 },
    { name: 'Toshiba', ram: 16 }
]

let allComputersCanRunProgram = true
let onlySomeComputersCanRunProgram = false


for (let i = 0; i < computers.length; i++) {
    let computer = computers[i]
    // console.log('looping...', computer)
    
    if (computer.ram < 16) {
        allComputersCanRunProgram = false
    } else {
        onlySomeComputersCanRunProgram = true
    }
}


allComputersCanRunProgram
console.log('can run:', allComputersCanRunProgram)

onlySomeComputersCanRunProgram
console.log('can run:', onlySomeComputersCanRunProgram)