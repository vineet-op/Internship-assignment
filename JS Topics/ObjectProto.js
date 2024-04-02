// Define a prototype object
let animal = {
  eats: true,
};

// Create a new object that inherits from `animal`
let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal;

// Now `rabbit` object has access to properties from `animal`
console.log(rabbit.eats); // Output: true
console.log(rabbit.jumps); // Output: true

// If we try to access a property that doesn't exist on `rabbit`, JavaScript will look up the prototype chain
console.log(rabbit.sleeps); // Output: undefined
console.log(animal.sleeps); // Output: undefined
