const anagrams = word => {
  if (word.length < 1) throw new Error('length must be > 1');
  if (word.length === 1) return [word];
  const permutations = [];
  for (let i = 0; i < word.length; i++) {
    let firstLetter = word[i];
    permutations.push(
      ...anagrams(word.substr(0, i) + word.substr(i + 1)).map(
        a => firstLetter + a
      )
    );
  }
  return permutations;
};

const factorial = n => {
  if (n != parseInt(n)) throw new Error('n must be an integer');
  if (n < 1) return 0;
  if (n == 1) return 1;
  return n * factorial(n - 1);
};

const word = process.argv[2];
const permutations = anagrams(word);
const n = word.length;
const expectedPermutations = factorial(n);
const test = permutations.length === expectedPermutations;
console.log(permutations);
console.log(test ? 'pass' : 'fail');
