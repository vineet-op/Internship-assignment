// Timeout example
console.log("Start");
setTimeout(function () {
  console.log("Timeout completed after 2 seconds");
}, 2000);
console.log("End");

// Interval example
var counter = 0;
var intervalId = setInterval(function () {
  console.log("Counter:", counter);
  counter++;
  if (counter === 5) {
    clearInterval(intervalId); // Stop the interval after 5 iterations
  }
}, 1000);
