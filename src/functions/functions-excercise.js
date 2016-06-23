
// Q1
var AnimalTest = function (username) {
   return {
      username: username
   }
};

var myCow = AnimalTest('Bessy');
console.log(myCow.username);

// Q2

function AnimalTestUser(username) {
   var argsLength = arguments.length;
   var otherArgs = [];
   if (argsLength > 1) {
      for (var i = 1; i < argsLength; i++) {
         otherArgs.push(arguments[i]);
      }
   }

   return {
      'username': username,
      'otherArgs': otherArgs
   }
}

// Q3
//Constructor function with 4 paremeters
function AnimalCreator(username, species, tagline, noises) {
   var animal = {
      username: username,
      species: species,
      tagline: tagline,
      noises: noises,
      friends: []
   };
   return animal;
}

var dog = AnimalCreator('Sam', 'Canine', 'I am barking mad!', ['John', 'Sue', 'Miguel']);

console.log(dog);

// Q4
function addFriend(animal, friend) {
   //animal.freinds.push(friend);
   animal.friends.push(friend.username);
}


//06
var myFarm = ['sheep', 'cow', 'llama'];
addFriend(cow, sheep);
addFriend(llama, cow);
console.log(myFarm);

//07
function addMatchesArray(farm) {
   for(var animal in farm){
      farm[animal].matches = [];
   }
}
addMatchesArray(myFarm);
console.log(myFarm[0]);

function giveMatches(myFarm){
   for (var animal in farm) {
    farm[animal].matches.push(farm[animal].freinds[0]);
   }
}
giveMatches(myFarm);
console.log(myFarm[0]);
