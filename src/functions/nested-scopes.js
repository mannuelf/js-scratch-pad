// The stack
/*
    Excerpt from Elequent JavaScript
    when a function is called, controll is given to the body of that function
    when that body returns the code that called the function is resumed
    thus while the body is running the computer must remember the context from which the function was called so that it knows where to continue afterwards.
    this place where context is stored is known as the stack
    execution context: means whic function is running, where on the stack is the function running
*/

// functions create variable scope
function multiplyAbsolute(number, factor) {
    function multiply(number) {
        return number * factor;
    }
    if(number < 0) {
        return multiply(-number);
    } else {
        return multiply(number);
    }
}
var result = multiplyAbsolute(1,2);
// console.log(result);

(function chicken() {
    return egg();
})();

function egg() {
    return chicken();
}

console.log(chicken() + " came firs.");