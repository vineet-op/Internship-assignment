class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item, priority) {
    this.queue.push({ item, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift().item;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0].item;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += `${this.queue[i].item} `;
    }
    return str;
  }
}

// Example usage:
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log(priorityQueue.printQueue()); // Output: Task 2 Task 3 Task 1

console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.front()); // Output: Task 3

console.log(priorityQueue.printQueue()); // Output: Task 3 Task 1
