//var box = [];
//var box2 = {};
//
//box.property0 = true;
//box.property1 = false;
//box.property3 = "there";
//box2.property0 = true;
//box2.property1 = false;
//
//box['material'] = "cardboard";
//box[0] = 'meow';
//box['^&*'] = "testing 123";

// iterate on box and log
//for(var key in box) {
//    console.log(box[key]);
//}

var box = [];

box["size"] = 9;
box[0] = "hello";
box.push("WhooHoo!");
box.push("man!");

// loop
for(var i = 0; i < 5; i++) {
    console.log(box[i]);
}