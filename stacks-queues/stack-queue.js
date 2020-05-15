const { Stack, isEmpty } = require('./stack');

class Queue {
  constructor() {
    this.mainStack = new Stack();
    this.tempStack = new Stack();
  }
  enqueue(data) {
    this.mainStack.push(data);
  }
  dequeue() {
    if (isEmpty(this.mainStack)) return null;
    while (!isEmpty(this.mainStack)) {
      this.tempStack.push(this.mainStack.pop());
    }
    const data = this.tempStack.pop();
    while (!isEmpty(this.tempStack)) {
      this.mainStack.push(this.tempStack.pop());
    }
    return data;
  }
}
