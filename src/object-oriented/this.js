var fn = function(one, two) {
    console.log(this, one, two);
};

var r = {},
    g = {},
    b = {}
r.method = fn; 
r.method(g,b);