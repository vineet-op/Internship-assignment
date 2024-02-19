//* Converting JSOn to string

let obj = { name: "John", age: 30 };
let jsonString = JSON.stringify(obj);

//* Converting string to JSON

let jsonString1 = '{"name": "John", "age": 30}';
let obj1 = JSON.parse(jsonString1);

//*Accessing Values
let obj3 = { name: "John", age: 30 };
console.log(obj3.name); // Output: John
console.log(obj3.age); // Output: 30

//*Modifing Values

let obj4 = { name: "John", age: 30 };
obj4.name = "Jane";
obj4.age = 25;

//* Iterating
let obj5 = { name: "John", age: 30 };
for (let key in obj5) {
  console.log(key + ": " + obj5[key]);
}
