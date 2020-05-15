// queue with doubly-linked list

class DblQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new Node(this.last, null, data);
    if (this.first === null) {
      this.first = node;
      this.last = null;
    } else {
      if (this.last === null) {
        this.last = node;
        this.first.next = node;
        node.prev = this.first;
      } else {
        this.last.next = node;
        this.last = node;
      }
    }
  }
  dequeue() {
    if (this.first === null) return null;
    else {
      const node = this.first;
      this.first = this.first.next;
      if (this.first === this.last) this.last = null;
      return node.data;
    }
  }
}

class Node {
  constructor(prev, next, data) {
    this.prev = prev;
    this.next = next;
    this.data = data;
  }
}

const print = queue => {
  let node = queue.first;
  if (node === null) return console.log('empty queue');
  console.group();
  console.log(node.data);
  while (node.next !== null) {
    console.log(node.next.data);
    node = node.next;
  }
  console.groupEnd();
};

const isEmpty = queue => queue.first === null;

const peek = queue => queue.first.data;

module.exports = {
  DblQueue,
  print,
  isEmpty,
  peek
};
