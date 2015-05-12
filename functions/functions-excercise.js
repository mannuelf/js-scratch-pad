
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
      username: username,
      otherArgs: otherArgs
   }
}

// Q3
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
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['John', 'Sue', 'Miguel']);
console.log(sheep);