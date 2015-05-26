// Closure examples

var closureAlert = function () {

   var x = 0;

   var alerter = function () {
      alert(++x);
      return true;
   };
   console.log(alerter);
   return alerter;

};

var funcStorer = closureAlert();
var funcStorer2 = closureAlert();


var add = function(num) {
   var num1 = num;
   var addToNum1 = function(num2) {
     return num1 + num2;
   };
   return addToNum1;
};

var add5 = add(5);

add5(2);


function counter() {
   var n = 0;
   return {
      count: function() { return ++n;},
      reset: function() { n = 0; }
   };
}

var myCounter = counter();
myCounter.count();


// create closuer
/*
* 1: define your parent function
* 2: define som variables in the parents local scope (this can be accessed by the child function
* 3: define a function inside the parent function. We call this a child
* 4: return that function from inside the parent function
* */

function checkscope() {
   var innerVar = "local scope";

   function innerFunction() {
      return innerVar;
   }

   return innerFunction;
}

// run parent function and save to a variable. this variable will hold what ever that function RETURNS
var test = checkscope();

// optional, check what that variable holds as its value (inner function
test;

//run the inner function
test();



// GOTCHA

var sayAlice = function(){

   var makeLog = function() {
      console.log(alice);
   };

   var alice = 'Why hello there, Alice';

   return makeLog;

};

var whatDoesSheSay = sayAlice();
whatDoesSheSay();