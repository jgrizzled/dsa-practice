const fibonacci = n => {
  if (n < 1) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2); // O(f(n-1) + f(n-2)) = O(f(n-2) + f(n-3) + f(n-3) + f(n-4)...f(1)) = O(2^n)
};

console.log(fibonacci(process.argv[2]));
