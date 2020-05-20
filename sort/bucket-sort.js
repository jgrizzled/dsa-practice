const bucketSort = (arr, min, max) => {
  if (!(min <= max)) throw new Error('min must be <= max');
  if (arr.length < 2) return arr;
  const range = max - min;
  const buckets = [];
  for (const n of arr) {
    const idx = Math.round((n / range) * (arr.length - 1));
    if (buckets[idx]) buckets[idx].push(n);
    else buckets[idx] = [n];
  }
  return buckets.reduce((arr, i) => [...arr, ...i], []);
};

const testVals = [];
for (let i = 0; i < 10; i++) {
  testVals.push(Math.floor(Math.random() * 100));
}
const min = Math.min(...testVals);
const max = Math.max(...testVals);

console.log(bucketSort(testVals, min, max));
