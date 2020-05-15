const { Stack, peek, isEmpty, print } = require('./stack');

const sort = s => {
  if (isEmpty(s)) return s;

  const tempStack = new Stack();

  let largest = s.pop();
  while (!isEmpty(s)) {
    if (peek(s) > largest) {
      tempStack.push(largest);
      largest = s.pop();
    } else tempStack.push(s.pop());
  }

  if (isEmpty(tempStack)) {
    tempStack.push(largest);
    return tempStack;
  } else {
    s = sort(tempStack);
    // flip order
    while (!isEmpty(s)) {
      tempStack.push(s.pop());
    }
    s.push(largest);
    while (!isEmpty(tempStack)) {
      s.push(tempStack.pop());
    }
    return s;
  }
};

const randomStack = new Stack();
Array(10)
  .fill(0)
  .map(_ => Math.floor(Math.random() * 100))
  .forEach(i => randomStack.push(i));

console.log('random stack');
print(randomStack);
console.log('sorted');
print(sort(randomStack));
