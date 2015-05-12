var animal = {
    username: 'Smithers',
    tagline: 'Hello there chickens!',
    noises: []
};

var noises = [];
animal.noises = noises;

console.log(animal);
//animal.username = 'Joe';
//animal.tagline = 'Here comes Joe!';

var count = 0;
for (var key in animal) {
    count++;
    if(key === 'username') {
        console.log('Hi my name is ' + animal[key]);
    } else if (key === 'tagline') {
        console.log('I like to say ' + animal[key]);
    }
}

var noiseArray = ['purr', 'cluck'];

noiseArray.unshift("growl");
noiseArray.push("bark");
noiseArray['3'] = "moooo";

// QA: What is the length?
// type in console
noiseArray.length; // 4
console.log(noiseArray.length);

// What is the last index? How is it different than the length?
noiseArray.lastIndexOf(); // -1
console.log(noiseArray);

animal.noises = noiseArray;
console.log(animal);

var animals = [];

animals.push(animal);

var quackers = {
    username: 'DaffyDuck',
    tagline: 'Yippeee!',
    noises: ['Quack', 'Splutter']
};

animals[animals.length] = quackers;

console.log(animals);

var dog = {
    username: "Sandy",
    tagline: "Wonder dog",
    noises: ["bark", "snarl", "sniff"]
};

var cat = {
    username: "Frankie",
    tagline: "Hello kitty",
    noises: ["moew", "purr"]
};

var honeyBadger = {};
honeyBadger.username = "Randal";
honeyBadger.tagline = "Honeybadgers dont care";
honeyBadger.noises = ["screech", "growl"];

animals.push(dog, honeyBadger, quackers, cat);

console.log(animals.length);
