const orgChart = {
  Zuckerberg: {
    Schroepfer: {
      BosWorth: ['Steve', 'Kyle', 'Andra'],
      Zhao: ['Richie', 'Sofia', 'Jen']
    },
    Schrage: {
      VanDyck: ['Sabrina', 'Michelle', 'Josh']
    },
    Sandberg: {
      Goler: ['Eddie', 'Julie', 'Annie'],
      Hernandez: ['Rowi', 'Inga', 'Morgan'],
      Moissinac: ['Amy', 'Chuck', 'Vinni'],
      Kelley: ['Eric', 'Ana', 'Wes']
    }
  }
};

const spacer = indent => Array(indent + 1).join('    ');

const orgChartStr = (orgChart, indent = 0) => {
  let str = '';
  for (const person of Object.keys(orgChart)) {
    str += spacer(indent) + person + '\n';
    if (Array.isArray(orgChart[person]))
      str += orgChart[person].reduce(
        (s, p) => s + spacer(indent + 1) + p + '\n',
        ''
      );
    else str += orgChartStr(orgChart[person], indent + 1);
  }
  return str;
};

console.log(orgChartStr(orgChart));
