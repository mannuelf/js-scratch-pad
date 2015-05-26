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

