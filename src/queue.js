const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.array = []
  }

  getUnderlyingList() {
    let list = {};
    this.array.reverse().map((item, i) => {
      list = {
        value: item,
        next: (i !== 0) ? list : null
      }
    })
    return list;
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    const firstItem = this.array[0];
    this.array = this.array.filter((_, i) => i !== 0);
    return firstItem;
  }
}

module.exports = {
  Queue
};
