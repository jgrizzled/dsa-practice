class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new Node(null, data);
    if (this.first === null) {
      this.first = node;
      this.last = null;
    } else {
      if (this.last === null) {
        this.last = node;
        this.first.next = node;
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
  constructor(next, data) {
    this.next = next;
    this.data = data;
  }
}

const print = queue => {
  let node = queue.first;
  if (node === null) return console.log('queue empty');
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
  Queue,
  print,
  isEmpty,
  peek
};
