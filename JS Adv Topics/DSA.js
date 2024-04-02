//*Arrays

const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"
console.log(fruits[2]); // Output: "orange"

fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "orange"]

// Implementing a Stack data structure
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

//* Stacks

function reverseString(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedString = "";
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }
  return reversedString;
}

// Testing the reverseString function
const inputString = "Hello";
console.log("Original string:", inputString);
console.log("Reversed string:", reverseString(inputString));
