
const MathLibrary = {
    calculateProduc(...rest) {
        console.log('please use the multiply method instead');
        return this.multiply(...rest)
    },
    multiply(a,b) {
        return a *b
    }
}
