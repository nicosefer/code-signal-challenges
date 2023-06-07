// https://app.codesignal.com/arcade/intro/level-11/

const chessBoard: number[][] = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

const chessRows = 'abcdefgh'.split('');
const chessCols = '12345678'.split('');

const knightMovementMap: Record<
  string,
  (row: number, col: number) => number | undefined
> = {
  'up2-right1': (row: number, col: number) => {
    const upIndex = row + 2;
    const rightIndex = col + 1;

    return chessBoard?.[upIndex]?.[rightIndex];
  },
  'up2-left1': (row: number, col: number) => {
    const upIndex = row + 2;
    const leftIndex = col - 1;

    return chessBoard?.[upIndex]?.[leftIndex];
  },
  'right2-up1': (row: number, col: number) => {
    const upIndex = row + 1;
    const rightIndex = col + 2;

    return chessBoard?.[upIndex]?.[rightIndex];
  },
  'left2-up1': (row: number, col: number) => {
    const upIndex = row + 1;
    const leftIndex = col - 2;

    return chessBoard?.[upIndex]?.[leftIndex];
  },
  'right2-down1': (row: number, col: number) => {
    const rightIndex = col + 2;
    const downIndex = row - 1;

    return chessBoard?.[downIndex]?.[rightIndex];
  },
  'left2-down1': (row: number, col: number) => {
    const leftIndex = col - 2;
    const downIndex = row - 1;

    return chessBoard?.[downIndex]?.[leftIndex];
  },
  'down2-left1': (row: number, col: number) => {
    const leftIndex = col - 1;
    const downIndex = row - 2;

    return chessBoard?.[downIndex]?.[leftIndex];
  },
  'down2-right1': (row: number, col: number) => {
    const rightIndex = col + 1;
    const downIndex = row - 2;

    return chessBoard?.[downIndex]?.[rightIndex];
  },
};

function solution(cell: string): number {
  const [row, col] = cell;

  const rowIndex = chessRows.indexOf(row);
  const colIndex = chessCols.indexOf(col);
  let output: number = 0;

  for (let i in knightMovementMap) {
    if (knightMovementMap[i](rowIndex, colIndex)) {
      output += 1;
    }
  }

  return output;
}
