const factorial = n => {
  if (n != parseInt(n)) throw new Error('n must be an integer');
  if (n < 1) return 0;
  if (n == 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(process.argv[2]));
