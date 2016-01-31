var Car = function(loc) {
    var obj = Object.create(Car.methods);
    return obj
};

Car.methods = {
    move: function () {
        this.loc++
    }
};