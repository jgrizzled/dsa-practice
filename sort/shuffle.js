const shuffle = arr => {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.round(Math.random() * (arr.length - 1));
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const testVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
shuffle(testVals);
console.log(testVals);
