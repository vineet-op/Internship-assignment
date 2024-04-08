// Example of explicit type conversion
var numString = "123";
var num = Number(numString); // Convert string to number
console.log(num); // Output: 123

// Example of implicit type conversion
var x = "5";
var y = 10;
var result = x + y; // String concatenation because of implicit conversion
console.log(result); // Output: "510"
