const LinkedList = require('../linked-list/linked-list');
const { size, print } = require('../linked-list/utils');

const LLmSort = ll => {
  const s = size(ll);
  if (s < 2) return ll;

  // split linked list
  let start = ll.head.next,
    end = ll.head.next,
    leftEnd = ll.head;
  while (end.next) {
    end = end.next;
    if (end.next) {
      end = end.next;
      leftEnd = start;
      start = start.next;
    }
  }
  leftEnd.next = null;

  let left = LLmSort(ll);
  let right = LLmSort(new LinkedList(start));

  const result = new LinkedList();

  let lNode = left.head;
  let rNode = right.head;
  // merge
  while (lNode && rNode) {
    if (lNode.value < rNode.value) {
      result.insertLast(lNode.value);
      lNode = lNode.next;
    } else {
      result.insertLast(rNode.value);
      rNode = rNode.next;
    }
  }

  while (lNode) {
    result.insertLast(lNode.value);
    lNode = lNode.next;
  }

  while (rNode) {
    result.insertLast(rNode.value);
    rNode = rNode.next;
  }

  return result;
};

const testLL = new LinkedList();
for (let i = 0; i < 10; i++) {
  testLL.insertLast(Math.floor(Math.random() * 100));
}

print(testLL);
console.log('sorting...');
print(LLmSort(testLL));
