// ES6 class example
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // Call the parent class constructor
  }

  speak() {
    console.log(this.name + " barks.");
  }
}

const animal = new Animal("dogs");
const dog = new Dog("Spot");
animal.speak();
dog.speak(); // Output: Spot barks.
