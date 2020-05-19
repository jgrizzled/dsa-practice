const isSameBSTarray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log('diff lengths');
    return false;
  }
  if (arr1[0] !== arr2[0]) {
    console.log('diff roots');
    return false;
  }
  if (arr1.length <= 1) return true;

  // get children
  const arr1c = arr1.slice(1);
  const arr2c = arr2.slice(1);

  // get L and R child root indexes
  const r1Idx = arr1c.findIndex(n => n >= arr1[0]);
  const l1Idx = arr1c.findIndex(n => n < arr1[0]);
  const r2Idx = arr2c.findIndex(n => n >= arr2[0]);
  const l2Idx = arr2c.findIndex(n => n < arr2[0]);

  // remove current root and put child root at beginning, filter children not on right side
  if (r1Idx !== -1 && r2Idx !== -1) {
    const arr1R = arr1c.filter(n => n >= arr1c[r1Idx]);
    arr1R.splice(0, 0, arr1R.splice(arr1R.indexOf(arr1c[r1Idx]), 1)[0]);
    const arr2R = arr1c.filter(n => n >= arr2c[r2Idx]);
    arr2R.splice(0, 0, arr2R.splice(arr2R.indexOf(arr2c[r2Idx]), 1)[0]);
    if (!isSameBSTarray(arr1R, arr2R)) {
      console.log('diff right subtree');
      return false;
    }
  } else if (!(r1Idx === -1 && r2Idx === -1)) {
    console.log('diff right child');
    return false;
  }

  if (l1Idx !== -1 && l2Idx !== -1) {
    const arr1L = arr1c.filter(n => n < arr1c[l1Idx]);
    arr1L.splice(0, 0, arr1L.splice(arr1L.indexOf(arr1c[l1Idx]), 1)[0]);
    const arr2L = arr2c.filter(n => n < arr2c[l2Idx]);
    arr2L.splice(0, 0, arr2L.splice(arr2L.indexOf(arr2c[l2Idx]), 1)[0]);
    if (!isSameBSTarray(arr1L, arr2L)) {
      console.log * 'diff left subtree';
      return false;
    }
  } else if (!(l1Idx === -1 && l2Idx === -1)) {
    console.log('diff left child');
    return false;
  }

  return true;
};

module.exports = isSameBSTarray;
