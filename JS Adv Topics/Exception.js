//* Exception Handling means dealing with errors in a more optimal way

try {
  fetch("https://dummyjson.com/products/1")
    .then((res) => res.json())
    .then((json) => console.log(json));
} catch (error) {
  console.log("Error occured while fetching the data" + error);
} finally {
  console.log("The Block is executed succesfully");
}
