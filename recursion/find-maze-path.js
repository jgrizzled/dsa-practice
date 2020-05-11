/*
  maze start = top left corner
  exit = e
  blocked = *
  cant revisit space
  cant go through sides

  input: maze
  output: array of turns, ex ['R', 'D', 'D', 'L', 'U']
  call input: maze with current pos blocked, current path
  call output: turns with next possible movement
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
const findMazePath = (maze, turns = []) => {
  // get current position
  let position = [0, 0];
  turns.forEach(t => {
    const dir = directions.find(d => d.name === t);
    position = position.map((p, i) => p + dir.positionChange[i]);
  });

  // check current pos
  if (maze[position[0]] && maze[position[0]][position[1]] === 'e') return turns;

  // block current pos
  const newMaze = maze.map(rows => [...rows]);
  newMaze[position[0]][position[1]] = '*';

  // check neighboring cells
  for (const d of directions) {
    const neighboringPos = position.map((p, i) => p + d.positionChange[i]);
    if (
      maze[neighboringPos[0]] &&
      maze[neighboringPos[0]][neighboringPos[1]] === 'e'
    )
      return [...turns, d.name];
  }

  // try paths
  const possibleDirs = directions.filter(d => {
    const neighboringPos = position.map((p, i) => p + d.positionChange[i]);
    if (
      maze[neighboringPos[0]] &&
      maze[neighboringPos[0]][neighboringPos[1]] === ' '
    )
      return true;
  });

  if (possibleDirs.length === 0) throw new Error('no possible turns');

  for (const pd of possibleDirs) {
    try {
      return findMazePath(newMaze, [...turns, pd.name]);
    } catch (e) {
      if (e.message === 'no possible turns') continue;
      else throw e;
    }
  }

  throw new Error('no exit found');
};

const test =
  JSON.stringify(findMazePath(smallMaze)) ===
    JSON.stringify(smallMazeSolution) &&
  JSON.stringify(findMazePath(bigMaze)) === JSON.stringify(bigMazeSolution);
console.log(test ? 'pass' : 'fail');
