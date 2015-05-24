var box = {};

box['innerBox'] = {};
box['innerBox'].full = true;

box['innerBox']['height'] = 10;

box.otherBox = {};
var innerBox2 = 'otherBox';
box[innerBox2].full = false;