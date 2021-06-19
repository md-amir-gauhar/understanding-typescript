// classes: Blueprint to create an object with some fields(values and methods) to represent a 'thing

class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
}

const vehicle = new Vehicle();
vehicle.drive();

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.drive();

// class method modifiers
//public: The default visibility of class members is public. A public member can be accessed by anywhere:

class Greeter {
  public greet() {
    console.log('hi!');
  }
}
const g = new Greeter();
g.greet();

// 2)protected: protected members are only visible to subclasses of the class they’re declared in.

class Greet {
  public greet() {
    console.log('Hello, ' + this.getName());
  }
  protected getName() {
    return 'hi';
  }
}

class SpecialGreeter extends Greet {
  public howdy() {
    // OK to access protected member here
    console.log('Howdy, ' + this.getName());
  }
}
const greet = new SpecialGreeter();
greet.greet(); // OK
greet.getName(); //Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

// 3)private: private is like protected, but doesn’t allow access to the member even from subclasses:
class Base {
  private x = 0;
}
const b = new Base();

console.log(b.x); // Can't access from outside the class

//Property 'x' is private and only accessible within class 'Base'.
class Derived extends Base {
  showX() {
    // Can't access in subclasses
    console.log(this.x);
    //Property 'x' is private and only accessible within class 'Base'.
  }
}
