let character = "luigi";
let age = 30;
let isBlackBelt = false;

// character = 100;
character = "mario";

// functions
const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(2000));

// Arrays
let names = ["jill", "jack"];
// names.push(3);
names.push("sally");

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers[1] = "Dan";

let mixed = ["jack", 4, "Jill", 222];
mixed.push(100);
mixed.push("sally");

// Objects
let car = {
  name: "porsche",
  year: 2020,
  color: "black",
  model: "911"
};

car.model = "911 Turbo";

car = {
  names: { first: "name" }
};
