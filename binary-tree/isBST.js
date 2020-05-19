const isBST = t => {
  if (!t.left && !t.right) return true;
  if (t.left && (t.left.value >= t.value || !isBST(t.left))) return false;
  if (t.right && (t.right.value < t.value || !isBST(t.right))) return false;
  return true;
};

module.exports = isBST;
