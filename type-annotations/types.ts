//Type: Easy way to refer to the different properties + functions that a value has.

// type annotation: code that we add to tell typescript what type of value a variable will refer to

// type inference: Typescript tries to figure out what type of value a variable refers to.

let apple: number = 2;
apple = 5;
/*
apple = "apple" ==> throws error
apple = false  ==> throws error
*/

let speed: string = 'fast';

let hasName: boolean = false;

let hasNoting: null = null;

// built in objects

let now: Date = new Date();
console.log(now.toUTCString());

// Arrays
let colors: string[] = ['Blue', 'Green'];

colors.push('Red');
//colors.push(19); ==> throws error

console.log(colors);

let myNumbers: number[] = [1, 2, 3];

// Classes

class Car {}

let car: Car = new Car();

// Object literals
let points: {
  x: number;
  y: number;
};

points = {
  x: 10,
  y: 20,
};

// points = {
//   x: 10,          ==> throws error
// };

// points = {
//   x: "199",
//   y: "45",           ==> throws error
// };

// Function
const logNumbers: (a: number) => void = (a) => console.log(a);

logNumbers(10);

// when tho use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) when we declare a variable on one line and initialize it later
let color = ['red', 'green', 'blue'];
let foundWord: boolean;

color.forEach((x) => {
  if (x == 'green') foundWord = true;
});

// 3) variable whose type cannot be inferred correctly
let numbers = [-1, -22, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach((x) => {
  if (x > 0) numberAboveZero = x;
});
