const HashMap = require('./hash-map');

const removeDuplicates = str => {
  const uniques = new HashMap(str.length);
  for (let i = 0; i < str.length; i++) {
    uniques.set(str[i], i);
  }
  let dedupedStr = '';
  for (let i = 0; i < str.length; i++) {
    try {
      if (uniques.get(str[i])) {
        dedupedStr += str[i];
        uniques.delete(str[i]);
      }
    } catch (e) {}
  }
  return dedupedStr;
};

console.log(removeDuplicates(process.argv[2]));
