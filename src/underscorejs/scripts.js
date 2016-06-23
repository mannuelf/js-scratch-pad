var sportsCast = ['Football', 'Moto racing', 'Rugby'];

var logger = function(val){
   console.log(val);
};

_.each(sportsCast,logger);

function AnimalMaker(name) {
   return {
      speak: function () {
         console.log("my name is ", name);
      }
   };
}

var animalNames = ['Joey','Sarah','Mikey'];
var farm = [];

//for(var i = 0; i < animalNames.length; i++){
//   farm.push(AnimalMaker(animalNames[i]))
//}

_.each(animalNames, function(){

   farm.push(AnimalMaker(name));

   console.log(animalNames);

});

