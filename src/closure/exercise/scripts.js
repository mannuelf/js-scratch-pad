'use strict';

// 01
var nonsense = function(string) {

   var blab = function() {
      alert(string);
   };

   //blab(); /*invocation*/
   //setTimeout(blab, 2000);
   return blab;
};

//nonsense('blah blah blah');

var blabLater = nonsense('blah blah blah');
var blabAgainLater = nonsense('laugh out loud');
//
//blabLater();
//blabAgainLater();

// 02
var lastNameTry = function(firstName) {
  var inner = function(lastName) {
     console.log(firstName + " " + lastName);
  };
   return inner;
};

var firstNameFarmer = lastNameTry('Jane');
firstNameFarmer('Brown');

var firstNameKatrina = lastNameTry('Katrina');
firstNameKatrina('Moldova');

// 03
var storyWriter = function() {
   var story = '';
   return {
      addWords: function(str) {
         story += str + ' ';
         return story.trim();
      },
      erase: function(){
         story = ' ';
      }
   }
};

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('Hello there');
storyOfMyLife.addWords('Joey');
erase();