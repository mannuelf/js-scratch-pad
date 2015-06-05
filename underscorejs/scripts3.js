
'use strict';

function AnimalMaker(name) {
   return {
      speak: function () {
         console.log("my name is ", name);
      }
   };
}

var animalNames = ['Sally', 'Patric', 'Jacob'];

var farm = _.map(animalNames, AnimalMaker);

