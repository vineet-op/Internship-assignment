// Object Literal
let myObject = {
  key1: value1,
  key2: value2,
};

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("John", 30);

// ES6 Class
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person2 = new Person2("John", 30);

// Factory Function
function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

let person3 = createPerson("John", 30);

// Object.create()
let personProto = {
  greet: function () {
    console.log("Hello");
  },
};

let person4 = Object.create(personProto);
person1.name = "John";
person1.age = 30;

// Using the `new` keyword with Object() constructor
let person5 = new Object();
person1.name = "John";
person1.age = 30;
