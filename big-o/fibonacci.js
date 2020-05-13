const fibonacci = n => {
  if (n < 1) return 0;
  let nMinus1 = 0;
  let nMinus2 = 0;
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    // O(n)
    nMinus2 = nMinus1;
    nMinus1 = sum;
    sum = nMinus1 + nMinus2;
  }
  return sum;
};

console.log(fibonacci(process.argv[2]));
