const BST = require('./bst.js');
const treeHeight = require('./height');
const isBST = require('./isBST');
const nthLargest = require('./nth-largest');
const isBalanced = require('./is-balanced');
const isSameBSTarray = require('./is-same-bst-array');

const testBST = new BST();

const nums = [3, 1, 4, 6, 9, 2, 5, 7];
for (const n of nums) {
  testBST.insert(n, n);
}

const test = (name, value, expected) => {
  if (value === expected) console.log(`${name} test: PASS`);
  else console.error(`${name} test: FAIL. Expected ${expected}, got ${value}`);
};

test('Value', testBST.right.right.right.left.value, 7);

test('Tree height', treeHeight(testBST), 5);

test('Largest', nthLargest(1, testBST), 9);
test('2nd largest', nthLargest(2, testBST), 7);
test('3rd largest', nthLargest(3, testBST), 6);
test('4th largest', nthLargest(4, testBST), 5);

test('Is Balanced 1', isBalanced(testBST), false);
const balBST = new BST();
balBST.insert(2, 2);
balBST.insert(3, 3);
balBST.insert(1, 1);
test('Is Balanced 2', isBalanced(balBST), true);

test('isBST 1', isBST(testBST), true);
testBST.right.right.right.left.value = 10;
test('isBST 2', isBST(testBST), false);

const arr1 = [3, 5, 4, 6, 1, 0, 2];
const arr2 = [3, 1, 5, 2, 4, 6, 0];
test('Is same BST array', isSameBSTarray(arr1, arr2), true);
