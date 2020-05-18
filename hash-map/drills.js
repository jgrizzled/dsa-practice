const HashMap = require('./hash-map');

const lotr = new HashMap();
const items = [
  { Hobbit: 'Bilbo' },
  { Hobbit: 'Frodo' },
  { Wizard: 'Gandalf' },
  { Human: 'Aragorn' },
  { Elf: 'Legolas' },
  { Maiar: 'The Necromancer' },
  { Maiar: 'Sauron' },
  { RingBearer: 'Gollum' },
  { LadyOfLight: 'Galadriel' },
  { HalfElven: 'Arwen' },
  { Ent: 'Treebeard' }
];
items.forEach(i => {
  const key = Object.keys(i)[0];
  const value = i[key];
  lotr.set(key, value);
});
console.log(lotr._hashTable);
