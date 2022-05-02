const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  constructor () {
    this.first = 0;
    this.last = 0;
    this.length = 0;
  }

  enqueue(value) {
    let element = new ListNode (value);
    if(this.length == 0) {
      this.first = element; 
      this.last = element;
      ++this.length;
    }else {
      this.last.next = element;
      this.last = element;
      ++this.length;
    }
  }

  dequeue() {
    let deleted = this.first;
    this.first = this.first.next;
    --this.length;
    return deleted.value;
  }

  getUnderlyingList() {
    return this.first;
  }
}

module.exports = {
  Queue
};
