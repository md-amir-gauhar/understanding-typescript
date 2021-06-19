const person = {
  name: 'Amir',
  age: 21,
  coords: {
    lat: 0,
    long: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = person;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = person;

