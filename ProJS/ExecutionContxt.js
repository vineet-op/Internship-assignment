// Global Execution Context
var globalVar = "I am global";

function outerFunction() {
  // Outer Function Execution Context
  var outerVar = "I am outer";

  function innerFunction() {
    // Inner Function Execution Context
    var innerVar = "I am inner";
    console.log(globalVar); // Accessible: from global execution context
    console.log(outerVar); // Accessible: from outer function execution context
    console.log(innerVar); // Accessible: from inner function execution context
  }

  innerFunction(); // Invoking inner function
}

outerFunction(); // Invoking outer function
