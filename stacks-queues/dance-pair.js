const { Queue, isEmpty } = require('./queue');

const dancers = [
  { name: 'Jane', gender: 'F' },
  { name: 'Frank', gender: 'M' },
  { name: 'John', gender: 'M' },
  { name: 'Sherlock', gender: 'M' },
  { name: 'Madonna', gender: 'F' },
  { name: 'David', gender: 'M' },
  { name: 'Christopher', gender: 'M' },
  { name: 'Beyonce', gender: 'F' }
];

const pairDancers = arrivingDancers => {
  const mQ = new Queue();
  const fQ = new Queue();
  const pairs = [];

  for (const d of arrivingDancers) {
    if (d.gender === 'F') fQ.enqueue(d.name);
    else mQ.enqueue(d.name);

    if (!isEmpty(fQ) && !isEmpty(mQ))
      pairs.push({ F: fQ.dequeue(), M: mQ.dequeue() });
  }

  return pairs;
};

pairDancers(dancers).forEach(p =>
  console.log(`Female dancer is ${p.F} and the male dancer is ${p.M}`)
);
