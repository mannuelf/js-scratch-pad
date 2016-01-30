var carlike = function(obj, loc) {
    obj.loc = loc
    obj.move = function move() {
      this.loc++  
    }
    return obj
}

var amy = carlike({}, 1)
amy.move(20)

var ben = carlike({}, 9)
ben.move(40)

console.log('Amy drove: ', amy.loc)
console.log('Ben drove: ', ben.loc);