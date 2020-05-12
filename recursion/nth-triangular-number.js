/*
  input: n
  output: num of points in equilateral triangle with side length n
  iteration input: n-1
  iteration output: 1 or n + func(n-1)
*/

const nthTriangularNumber = n => {
  if (n < 1) throw new Error('n must be >= 1');
  if (n == 1) return 1;
  return Number(n) + nthTrianularNumber(n - 1); // O(n)
};

console.log(nthTriangularNumber(process.argv[2]));
