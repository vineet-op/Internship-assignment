/*
    * Queue:
   * A queue is a linear data structure that follows the First In, First Out (FIFO) principle.
   * It means that the element that is added first to the queue will be the one to be removed first.

*/

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
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

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log("Queue size:", q.size());
console.log("Dequeue:", q.dequeue());
console.log("Dequeue:", q.dequeue());
console.log("Queue size after dequeue:", q.size());
