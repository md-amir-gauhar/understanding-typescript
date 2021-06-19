//  An interface defines the syntax that any entity must adhere to.
// Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members.
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Broken ${this.name} built in the year 2020`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 30,
  summary(): string {
    return `My drink has ${this.sugar}grams of Sugar in it.`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
