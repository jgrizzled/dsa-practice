const HashMap = require('./hash-map');

// in even string, all chars must appear even number of times
// in odd string, all chars must appear even except one
const hasPalindromePermutation = str => {
  const charCounts = new HashMap();
  for (let i = 0; i < str.length; i++) {
    try {
      const n = charCounts.get(str[i]);
      charCounts.set(str[i], n + 1);
    } catch (e) {
      charCounts.set(str[i], 1);
    }
  }
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++) {
      if (charCounts.get(str[i]) % 2 !== 0) return false;
    }
    return true;
  } else {
    let oddOne = null;
    for (let i = 0; i < str.length; i++) {
      if (charCounts.get(str[i]) % 2 !== 0) {
        if (!oddOne) oddOne = str[1];
        else if (str[i] !== oddOne) return false;
      }
    }
    return true;
  }
};

// recursive way - O(n!+n*n!/4) = O(n!(1+n/4))
const palindrome = str => {
  const perms = permutations(str); //O(n!)
  for (const p of perms) {
    //O(n!/2)
    let isPalindrome = true;
    for (let i = 0; i < p.length / 2; i++) {
      //O(n/2)
      if (p[i] !== p[p.length - 1 - i]) isPalindrome = false;
    }
    if (isPalindrome) return true;
  }
  return false;
};

// O(n!)
const permutations = str => {
  if (str.length === 1) return [str];
  const ps = [];
  for (let i = 0; i < str.length; i++) {
    const start = str[i];
    const prev = str.substr(0, i);
    const end = str.substr(i + 1);
    ps.push(...permutations(prev + end).map(p => start + p));
  }
  return [...new Set(ps)];
};

console.log('Hash Table: ' + hasPalindromePermutation(process.argv[2]));
console.log('Recursive: ' + palindrome(process.argv[2]));
