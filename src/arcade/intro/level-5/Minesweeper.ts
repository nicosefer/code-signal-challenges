// https://app.codesignal.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM

function getNeighbourBombsFromCoord(
  matrix: boolean[][],
  coord: number[]
): number {
  let output = 0;
  let [row, col] = coord;
  let positionsToCheck: Record<string, () => undefined | boolean> = {
    up: () => matrix?.[row - 1]?.[col],
    down: () => matrix?.[row + 1]?.[col],
    left: () => matrix?.[row]?.[col - 1],
    right: () => matrix?.[row]?.[col + 1],
    'up-left': () => matrix?.[row + 1]?.[col - 1],
    'up-right': () => matrix?.[row + 1]?.[col + 1],
    'down-left': () => matrix?.[row - 1]?.[col - 1],
    'down-right': () => matrix?.[row - 1]?.[col + 1],
  };

  for (let i in positionsToCheck) {
    const result = positionsToCheck[i]();
    if (result) {
      output += 1;
    }
  }
  return output;
}

function solution(matrix: boolean[][]): number[][] {
  return matrix.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      return getNeighbourBombsFromCoord(matrix, [rowIndex, colIndex]);
    });
  });
}
