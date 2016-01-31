var Car = function(loc) {
    var obj = Object.create(loc);
    obj.move = function move() {
     obj.loc++  
    }
    return obj
};

Car.methods = {
    move: function () {
        this.loc++
    }
};