//* Dequeue Can perform addition and deletaion of Element from front as well as rear

class Deque {
  constructor() {
    this.items = [];
  }

  addFront(item) {
    this.items.unshift(item);
  }

  addRear(item) {
    this.items.push(item);
  }

  removeFront() {
    if (!this.isEmpty()) {
      return this.items.shift();
    } else {
      return null;
    }
  }

  removeRear() {
    if (!this.isEmpty()) {
      return this.items.pop();
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage:
const d = new Deque();
d.addFront(1);
d.addRear(2);
d.addRear(3);
console.log("Deque size:", d.size());
console.log("Remove front:", d.removeFront());
console.log("Remove rear:", d.removeRear());
console.log("Deque size after removal:", d.size());
