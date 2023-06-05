// https://app.codesignal.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo/

const columns = 'abcdefgh'.split('');
const rows = '12345678'.split('');

function areInDiagonalPositions(pos1: string, pos2: string): boolean {
  let [col1, row1] = pos1;
  let [col2, row2] = pos2;

  // same col | row case
  if (col1 === col2 || row1 === row2) {
    return false;
  }

  const col1Index = columns.indexOf(col1); // 6
  const col2Index = columns.indexOf(col2); // 5

  let diffCols = col1Index - col2Index;
  if (diffCols < 0) {
    diffCols *= -1;
  }

  const row1Index = rows.indexOf(row1); // 6
  const row2Index = rows.indexOf(row2); // 5

  if (row1Index > row2Index) {
    return row1Index - diffCols === row2Index;
  } else {
    return row2Index - diffCols === row1Index;
  }
}

function solution(bishop: string, pawn: string): boolean {
  return areInDiagonalPositions(bishop, pawn);
}
