const treeHeight = t => {
  if (!t) return 0;
  if (!t.left && !t.right) return 1;
  let lHeight = 0;
  let rHeight = 0;
  if (t.left) lHeight = 1 + treeHeight(t.left);
  if (t.right) rHeight = 1 + treeHeight(t.right);
  return Math.max(lHeight, rHeight);
};

module.exports = treeHeight;
