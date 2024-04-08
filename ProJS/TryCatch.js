try {
  // Code that may throw an error
  var result = 10 / 0; // This will throw a division by zero error
  console.log(result); // This line will not be executed if an error occurs
} catch (error) {
  // Code to handle the error
  console.error("An error occurred:", error.message);
} finally {
  // Optional: Code that always runs, regardless of whether an error occurred or not
  console.log("Finally block executed");
}
