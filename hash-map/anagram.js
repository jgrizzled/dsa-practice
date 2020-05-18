const HashMap = require('./hash-map');
const groupAnagrams = words => {
  const anagramGroups = [[words.pop()]];
  let i = words.length - 1;
  while (words.length > 0) {
    let foundGroup = false;
    for (const a of anagramGroups) {
      if (isAnagram(a[0], words[i])) {
        a.push(words.pop());
        foundGroup = true;
        break;
      }
    }
    if (!foundGroup) anagramGroups.push([words.pop()]);
    i--;
  }
  return anagramGroups;
};

const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;
  const charMap1 = new HashMap();
  const charMap2 = new HashMap();
  // build char maps
  for (let i = 0; i < word1.length; i++) {
    try {
      const n = charMap1.get(word1[i]);
      charMap1.set(word1[i], n + 1);
    } catch {
      charMap1.set(word1[i], 1);
    }
    try {
      const n = charMap2.get(word2[i]);
      charMap2.set(word2[i], n + 1);
    } catch {
      charMap2.set(word2[i], 1);
    }
  }
  // check equivalence
  for (let i = 0; i < word1.length; i++) {
    try {
      const n = charMap1.get(word1[i]);
      const m = charMap2.get(word1[i]);
      if (m !== n) return false;
    } catch {
      return false;
    }
  }
  return true;
};

const words = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
console.log(groupAnagrams(words));
