const powerCalculator = (base, exp) => {
  if (exp < 0) throw new Error('exponent should be >= 0');
  if (exp > 0) return base * powerCalculator(base, exp - 1);
  if (exp === 0) return 1;
};

console.log(powerCalculator(process.argv[2], process.argv[3]));
