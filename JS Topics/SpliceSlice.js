//splice() is used to add or remove elements from an array. It modifies the original array.

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Removes one element starting from index 2
console.log(arr); // Output: [1, 2, 4, 5]

// slice() is used to extract a portion of an array and returns a new array without modifying the original array.

let arr2 = [1, 2, 3, 4, 5];
let slicedArr = arr2.slice(1, 3); // Extracts elements from index 1 to index 2 (not inclusive of index 3)
console.log(slicedArr); // Output: [2, 3]
