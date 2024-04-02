//* Bind
let obj = { Name: "Vineet" };

function getX() {
  return this.Name;
}

let Getname = getX.bind(obj);
console.log(Getname()); // Output: 42

//* Apply
function add(a, b) {
  return a + b;
}

let args = [3, 4];
let sum = add.apply(args);
console.log(sum); // Output: 7

//*Call

let person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

let person1 = {
  firstName: "John",
  lastName: "Doe",
};

let person2 = {
  firstName: "Jane",
  lastName: "Doe",
};

// Calling the fullName method of the person object with different contexts using call()
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));
