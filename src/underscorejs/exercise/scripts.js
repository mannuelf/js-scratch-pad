//Use _.each to loop through an array and console.log() all the values.
// Now use it to console.log() the indices.
// How would this be different if you were looping through an object?

//_.each([1,2,3], function(value, index, list){
//   console.log(value);
//   console.log(index);
//});

//Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.
var helloArr = ['bonjour', 'hello', 'jola'];

var checkValue = function(arr, val) {
   for(var i = 0; i < arr.length; i++) {
      if(arr[i] === val){
         return true;
      }
   }
   return false;
};

var checkValue2 = function(arr, val) {
   result = false;
   _.each(arr, function(v){
      if(v === val){
         result = true
      }
   });
   return result;
};

checkValue(helloArr, 'hello');
checkValue2(helloArr, 'hello');

//Use _.map to mimic the previous behavior.
//input: {two: 2, four: 4, three: 3, twelve: 12}
//output: [2, 4, 3, 12]

var myNumbers = _.map({ two: 2, four: 4, three: 3, twelve: 12}, function(val, prop, obj){
   return val;
});