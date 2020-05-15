class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) this.top = new Node(null, data);
    else this.top = new Node(this.top, data);
  }
  pop() {
    if (this.top === null) return null;
    else {
      const node = this.top;
      this.top = this.top.next;
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

const print = stack => {
  let node = stack.top;
  if (node === null) return console.log('null');
  console.group();
  console.log(node.data);
  while (node.next !== null) {
    console.log(node.next.data);
    node = node.next;
  }
  console.groupEnd();
};

const isEmpty = stack => stack.top === null;

const peek = stack => (stack.top === null ? null : stack.top.data);

module.exports = {
  Stack,
  print,
  isEmpty,
  peek
};
