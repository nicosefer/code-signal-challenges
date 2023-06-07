// https://app.codesignal.com/arcade/intro/level-12/fQpfgxiY6aGiGHLtv/

function solution(matrix: number[][]): number {
  const countRows = matrix.length;
  const countCols = matrix[0].length;
  const squares: Record<string, number[]> = {};

  for (let i = 1; i < countRows; i++) {
    const currentRow = matrix[i];
    const prevRow = matrix[i - 1];

    let tmpSquare = [];
    for (let j = 1; j < countCols; j++) {
      const currentRowCol = currentRow[j];
      const currentPrevRowCol = currentRow[j - 1];

      const prevRowCol = prevRow[j];
      const prevPrevRowCol = prevRow[j - 1];

      if (tmpSquare.length === 4) {
        let key = tmpSquare.toString();
        squares[key] = tmpSquare;
        tmpSquare = [];
      }

      tmpSquare.push(currentPrevRowCol);
      tmpSquare.push(currentRowCol);
      tmpSquare.push(prevPrevRowCol);
      tmpSquare.push(prevRowCol);
    }
    if (tmpSquare.length === 4) {
      let key = tmpSquare.toString();
      squares[key] = tmpSquare;
      tmpSquare = [];
    }
  }

  return Object.keys(squares).length;
}
