function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
}

var arr1 = [1,2,3];
console.log(arr1);

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter)
 }

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);