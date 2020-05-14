module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(val) {
    this.head = new Node(this.head, val);
  }
  insertLast(val) {
    if (this.head === null) {
      this.head = new Node(null, val);
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(null, val);
    }
  }
  insertBefore(beforeVal, val) {
    let node = this.head;
    if (node === null || node.value === val) {
      this.insertFirst(val);
      return true;
    }
    while (node.next !== null && node.next.value !== beforeVal) {
      node = node.next;
    }
    if (node.next === null) return false;
    const newNode = new Node(node.next, val);
    node.next = newNode;
  }
  insertAfter(afterVal, val) {
    const node = this.find(afterVal);
    const newNode = new Node(node.next, val);
    node.next = newNode;
  }
  insertAt(idx, val) {
    let currIdx = 0;
    let node = this.head;
    if (node === null) {
      if (idx === 0) {
        this.head = new Node(null, val);
        return true;
      } else return false;
    }
    while (node.next !== null && currIdx < idx - 1) {
      node = node.next;
      currIdx++;
    }
    if (currIdx !== idx - 1) return false;
    const newNode = new Node(node.next, val);
    node.next = newNode;
  }
  remove(val) {
    let node = this.head;
    if (node === null) return false;
    if (node.value === val) {
      this.head = this.head.next;
      return true;
    }
    while (node.next !== null && node.next.value !== val) {
      node = node.next;
    }
    if (node.next === null) return false;
    node.next = node.next.next;
    return true;
  }
  find(val) {
    let node = this.head;
    if (node === null) return null;
    while (node.value !== val && node.next !== null) {
      node = node.next;
    }
    if (node.value === val) return node;
    return null;
  }
};

class Node {
  constructor(next, val) {
    this.next = next;
    this.value = val;
  }
}
