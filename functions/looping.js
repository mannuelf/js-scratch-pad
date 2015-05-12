function AnimalMaker(name) {
   return {
      speak: function () {
         console.log("my name is ", name);
      },
      name: name
   };
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];

/*
//loop throuh animal names
for(var i = 0; i < animalNames.length; i++) {
   //create animal object for each one
   farm[i] = AnimalMaker(animalNames[i]);

   farm.push(animalNames);

   farm.push(AnimalMaker(animalNames[i]));
}
*/

for(var i = 0; i < farm.length; i++) {
   farm[i].speak();
}