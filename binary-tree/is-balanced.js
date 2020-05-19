const treeHeight = require('./height');

const isBalanced = (t, i = 0) => {
  if (!t) return true;
  const r = treeHeight(t.right);
  const l = treeHeight(t.left);
  if (Math.abs(r - l) <= 1 && isBalanced(t.right) && isBalanced(t.left))
    return true;
  return false;
};

module.exports = isBalanced;
