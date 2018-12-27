/*
    Closure
    Excerpts from www.eloquentjavascript.net
*/

function createFunction() {
    var local = 10;
    return function () {
        return local;
    };
}

