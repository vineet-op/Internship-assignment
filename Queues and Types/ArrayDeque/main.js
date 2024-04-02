const arrayDeque = [];

arrayDeque.push(1);
arrayDeque.push(2);
arrayDeque.push(3);

arrayDeque.unshift(0);

console.log("Removed from rear:", arrayDeque.pop());

console.log("Removed from front:", arrayDeque.shift());

console.log("Array Deque:", arrayDeque);
