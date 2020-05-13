// 1st dimension = rods (left to right), 2nd dimension = disk widths (bottom to top)
// assume unique disk sizes
// goal is move tower to right side

const n = Number(process.argv[2]);
const tower = [
  Array(n)
    .fill(0)
    .map((_, i) => n - i),
  [],
  []
];
let moves = 0;
const moveDisk = (tower, sourceIndex, destIndex) => {
  tower[destIndex].push(tower[sourceIndex].pop());
  console.log('Move: ' + ++moves);
  printTower(tower);
};

const hanoi = (
  tower,
  disk = tower[0][0],
  sourceIndex = 0,
  destIndex = 2,
  auxIndex = 1
) => {
  if (disk === 1) moveDisk(tower, sourceIndex, destIndex);
  else {
    hanoi(tower, disk - 1, sourceIndex, auxIndex, destIndex); // hanoi(n-1)
    moveDisk(tower, sourceIndex, destIndex); // O(1)
    hanoi(tower, disk - 1, auxIndex, destIndex, sourceIndex); // hanoi(n-1)
  }
};

const dashes = '-';
const printTower = towerState => {
  const maxWidth =
    dashes.length *
    towerState.reduce((max, t) => Math.max(max, Math.max(...t)), 0);
  const numDisks = towerState.reduce((count, t) => t.length + count, 0);
  const emptyDiskStr = Array(maxWidth).fill(' ').join('');
  const rodNames = Array(3)
    .fill('Rod ')
    .map((s, i) => s + (i + 1));
  const header = rodNames.join(emptyDiskStr) + emptyDiskStr;
  const spacer = Array(5 + maxWidth)
    .fill(' ')
    .join('');
  let stateStr = '';
  for (let i = numDisks - 1; i >= 0; i--) {
    for (let j = 0; j < 3; j++) {
      if (towerState[j][i]) {
        const diskStr = Array(towerState[j][i]).fill(dashes).join('');
        const diff = spacer.length - diskStr.length;
        stateStr += diskStr + Array(diff).fill(' ').join('');
      } else stateStr += spacer;
    }
    stateStr += '\n    ';
  }
  console.log(`
    ${header}
    ${Array(header.length).fill('_').join('')}

    ${stateStr}
  `);
};

hanoi(tower);
