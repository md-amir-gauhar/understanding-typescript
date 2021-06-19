//Typed Arrays : Arrays where each element is some consistent type of values

const carMakers: string[] = [];
carMakers.push('Ford');
carMakers.push('BMW');

const carsByMake: string[][] = [];

carsByMake.push(['f150']);
carsByMake.push(['i10']);

const dates = [new Date(), new Date()];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
// carMakers.push(100) --> error

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [];
