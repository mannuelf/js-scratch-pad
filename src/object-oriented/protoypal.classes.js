/*
 * Prototypal Class Pattern
 */
var Car = function(loc) {
    //var obj = { loc: loc }; // object literal not good.
    // Generate the new instance object with object.create delegates Car.methods to Car object via Object.create
    var obj = Object.create(Car.methods);
    obj.loc = loc;
    return obj
};

// Prototype object to be delegated to
Car.methods = {
    move: function () {
        this.loc++
    }
};

// option 2: using prototype
Car.prototype.move = function () {
  this.loc++;  
};