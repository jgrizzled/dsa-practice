const print = ll => {
  let node = ll.head;
  if (node === null) return console.log('Head: null');
  console.group();
  console.log(node.value);
  while (node.next !== null) {
    console.log(node.next.value);
    node = node.next;
  }
  console.groupEnd();
};

const size = ll => {
  const maxSize = 10 ** 6;
  let node = ll.head;
  if (node === null) return 0;
  let n = 1;
  while (node.next !== null && n < maxSize) {
    node = node.next;
    n++;
  }
  return n;
};

const isEmpty = ll => ll.head === null;

const findPrevious = (ll, val) => {
  let node = ll.head;
  if (node === null) return null;
  while (node.next !== null && node.next.value !== val) {
    node = node.next;
  }
  if (node.next === null) return null;
  return node.value;
};

const findLast = ll => {
  let node = ll.head;
  if (node === null) return null;
  while (node.next !== null) {
    node = node.next;
  }
  return node.value;
};

module.exports = {
  print,
  size,
  isEmpty,
  findPrevious,
  findLast
};
