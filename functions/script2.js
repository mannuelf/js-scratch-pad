var add = function(a, b) {
    console.log(arguments);
    return a + b + arguments[2];
};

//calling a function
add(3, 10);


var addTwo = function(a, b) {
    results = 0;
    for(var i = 0; i < arguments.length; i++){
        results += arguments[i];
    }
    return results;
};

addTwo(2, 2);

var addThree = function(a, b){
    Array.prototype.slice.call(arguments, 0, 1); //ERROR!
    return a + b;
};

addThree(10, 10);


var add =  function(a, b) {
   /*
    results = 0;
    for(var i = 0; i < arguments.length; i++) {
    results += arguments[i];
    }
    return results
    */

   /*
    console.log(arguments);
    return a + b + arguments[2];
    */

   Array.prototype.slice.call(arguments, 0);
   return a + b;
};

//console.log("Answer: " + add(4 ,10, 3, 898, 83, 836, 92));
console.log("Answer: " + add(3, 10, 5));

var AnimalMaker = function(name) {
   return {
      speak: function () {
         console.log("my name is " + name);
      },
      name: name,
      owner: 'Manny'
   };
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];
var farm = [];

for(var i = 0; i < animalNames.length; i++) {
   farm.push(AnimalMaker(animalNames[i]))
}

for(var i = 0; i < farm.length; i++) {
   farm[i].speak;
}
