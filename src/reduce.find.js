let numbers = [1,1,2,3,4,4,5,6,7,7]

function unique(array) {
    return array.reduce((prev, item) => {
        console.log(!prev.includes(item));
        if (!prev.includes(item)) {
            prev.push(item)
        }
        return prev
    }, [])
}
console.log(unique(numbers))
