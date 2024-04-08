//array and object methods

//Object.assign();
// This method gives us the ability to combine objects together.

const objectOne = {
  firstName: "Santa",
};

const objectTwo = {
  lastName: "Claus",
};

const objectCombined = Object.assign(objectOne, objectTwo);
// objectCombined is: { firstName: 'Santa', lastName: 'Claus' }

//Object.entries()
//Here we can create an array containing arrays of key/value pairs of an object. Essentially, it converts objects into arrays of arrays.

let person = {
  name: "Vineet",
  age: 20,
};

const newObj = Object.entries(person);

//freeze
const frozenObject = {
  name: "Batman",
};

Object.freeze(frozenObject);

frozenObject.name = "Superman";

// frozenObject will remain equal to { name: 'Batman' }

//Map method

let arr = [1, 2, 3, 4];

let multiply10 = arr.map((val, i, arr) => {
  return val * 10;
});

//multiply10 = [10, 20, 30, 40];

//Filter Method

const array = [1, 2, 3, 4];
const result = array.filter((num) => num * 3);
console.log(result);

//Reduce
const numbers = [10, 20, 20];

const total = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

// total will be equal to 50
