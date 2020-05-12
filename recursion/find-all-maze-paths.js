/*
  maze start = top left corner
  exit = e
  blocked = *
  cant revisit space
  cant go through sides

  input: maze
  output: array of paths, ex [['R', 'D', 'D', 'L', 'U'], ...]
  call input: maze with current path blocked, current path
  call output: path with next possible movement
*/
const smallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

const smallMazeSolution = ['R', 'R', 'D', 'D'];

const bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const bigMazeSolution = ['R', 'R', 'D', 'D', 'R', 'R', 'R', 'R', 'D', 'D'];

// map turn name to position change
const directions = [
  { name: 'R', positionChange: [0, 1] },
  { name: 'L', positionChange: [0, -1] },
  { name: 'D', positionChange: [1, 0] },
  { name: 'U', positionChange: [-1, 0] }
];

// initial position = [0, 0]
const findAllMazePaths = (maze, path = []) => {
  // get current position
  let position = [0, 0];
  const visitedMaze = maze.map(rows => [...rows]); // n
  path.forEach(t => {
    // n
    const dir = directions.find(d => d.name === t);
    // block visited positions
    visitedMaze[position[0]][position[1]] = 'X';
    position = position.map((p, i) => p + dir.positionChange[i]);
  });

  console.table(visitedMaze);

  // check current pos
  if (maze[position[0]] && maze[position[0]][position[1]] === 'e')
    return [path];

  // get possible turns
  const possibleDirs = directions.filter(d => {
    const neighboringPos = position.map((p, i) => p + d.positionChange[i]);
    if (
      visitedMaze[neighboringPos[0]] &&
      ['e', ' '].includes(visitedMaze[neighboringPos[0]][neighboringPos[1]])
    )
      return true;
  });

  if (possibleDirs.length === 0) return [];

  return possibleDirs.reduce(
    (arr, pd) => [...arr, ...findAllMazePaths(visitedMaze, [...path, pd.name])], //n*n
    []
  );
};

console.log('--- Running small maze ---');
const smallMazePaths = findAllMazePaths(smallMaze);
const test1 = smallMazePaths.some(
  p => JSON.stringify(p) === JSON.stringify(smallMazeSolution)
);
console.log('Small maze test: ' + test1 ? 'pass' : 'fail');
console.log(smallMazePaths);

console.log('--- Running big maze ---');
const bigMazePaths = findAllMazePaths(bigMaze);
const test2 = bigMazePaths.some(
  p => JSON.stringify(p) === JSON.stringify(bigMazeSolution)
);
console.log('Big maze test: ' + test2 ? 'pass' : 'fail');
console.log(bigMazePaths);
