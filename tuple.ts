// Tuple: Array like structure where each element represents some property of a record
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 20];

//type alias
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 35];
const tea: Drink = ['brown', false, 10];
