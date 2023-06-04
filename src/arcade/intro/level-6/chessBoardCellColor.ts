// https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi

const whiteFirstRow = [0, 1, 0, 1, 0, 1, 0, 1];
const blackFirstRow = [1, 0, 1, 0, 1, 0, 1, 0];

const chessBoard = [
  whiteFirstRow,
  blackFirstRow,
  whiteFirstRow,
  blackFirstRow,
  whiteFirstRow,
  blackFirstRow,
  whiteFirstRow,
  blackFirstRow,
];

const yAxis = '12345678'.split('');
const xAxis = 'ABCDEFGH'.split('');

function mapCellToColor(cell: string): number {
  let [x, y] = cell;

  const yNumber = parseInt(y);
  const rowIndex = yNumber - 1;

  let row = chessBoard[rowIndex];
  const colIndex = xAxis.indexOf(x);

  return row[colIndex];
}

function solution(cell1: string, cell2: string): boolean {
  return mapCellToColor(cell1) === mapCellToColor(cell2);
}
