
var myToaster = function() {

   var maxTemp = 500;
   var temp = 0;

   return {
      setTemp: function(newTemp) {
         if (newTemp > maxTemp) {
            console.log("Thaa temperature is too high");
         } else {
            temp = newTemp;
         }
      }
   };
};

var myToaster = myToaster();
myToaster.setTemp(300);

// Write a function, funcCaller, that takes a func (a function) and an arg (any data type).
// The function returns the func called with arg(as an argument).

var funcCaller = function(func, arg) {
   return func(arg);
};

// Write a function, firstVal, that takes an array, arr, and a function, func,
// and calls func with the first index of the arr, the index # and the whole array.

var firstVal = function(arr, func) {
   return fun(arr[0, 0, arr]);
};

// Change firstVal to work not only with arrays but also objects. Since objects are not ordered,
// you can use any key-value pair on the object.
firstVal = function(list, func) {
   if(Array.isArray(list)){
      fun(arr[0], 0, arr);
   } else {
      //for(var k in list) {
      //   return function (list[k], k, list);
      //}
      var propArr = Object.keys(list);
      func(list[propArr[0], propArr[0]])
   }
}