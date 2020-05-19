const nthLargest = (n, t) => {
  const arr = bstToArr(t);
  return arr[arr.length - n];
};

const bstToArr = t => {
  let arr = [];
  if (!t) return arr;
  arr.push(...bstToArr(t.left));
  arr.push(t.value);
  arr.push(...bstToArr(t.right));
  return arr;
};

module.exports = nthLargest;
