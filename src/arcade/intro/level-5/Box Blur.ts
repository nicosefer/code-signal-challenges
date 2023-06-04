// https://app.codesignal.com/arcade/intro/level-5/5xPitc3yT3dqS7XkP

interface Coordinate {
  vertical: number[];
  horizontal: number[][];
}

type Square = number[];

function getCoordinates(
  verticalRanges: number[][],
  horizontalRanges: number[][]
): Coordinate[] {
  return verticalRanges.map((verticalRange) => {
    return {
      vertical: verticalRange,
      horizontal: horizontalRanges,
    };
  });
}

function getSquare(
  data: number[][],
  verticalCoord: number[],
  horizontalCoord: number[]
): Square {
  let output: number[] = [];
  verticalCoord.forEach((vvalue) => {
    horizontalCoord.forEach((hvalue) => {
      output.push(data[vvalue][hvalue]);
    });
  });

  return output;
}

function getAllSquares(data: number[][], coordinates: Coordinate[]): Square[] {
  const output: number[][] = [];
  coordinates.forEach((coordinate) => {
    const { vertical: verticalCoordinate, horizontal: horizontalCoordinates } =
      coordinate;

    horizontalCoordinates.forEach((horizontalCoordinate) => {
      const square = getSquare(data, verticalCoordinate, horizontalCoordinate);
      output.push(square);
    });
  });
  return output;
}

function calculateSquareBoxBlur(square: Square): number {
  return Math.floor(
    square.reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0) / 9
  );
}

function groupSquares(squares: Square[], sliceSize: number): Square[][] {
  let output = [];
  let tmp: Square[] = [];
  for (let i = 0; i < squares.length; i++) {
    if (tmp.length === sliceSize) {
      output.push(tmp);
      tmp = [];
    }
    tmp.push(squares[i]);
  }

  if (tmp.length) {
    output.push(tmp);
  }
  return output;
}

function createSequentialArray(n: number): number[] {
  let output = [];
  for (let i = 0; i < n; i++) {
    output.push(i);
  }
  return output;
}

function calculateRange(size: number): number[][] {
  let data = createSequentialArray(size);

  let output = [];
  let tmp = [];

  for (let i = 1; i < data.length; i++) {
    let prevValue = data[i - 1];
    let currentValue = data[i];
    let nextValue = data[i + 1];

    if (tmp.length === 3) {
      output.push(tmp);
      tmp = [];
    }

    if (nextValue) {
      tmp.push(prevValue);
      tmp.push(currentValue);
      tmp.push(nextValue);
    }
  }

  if (tmp.length === 3) {
    output.push(tmp);
  }

  return output;
}

function solution(image: number[][]): number[][] {
  let width = image[0].length;
  let height = image.length;

  let verticalRange = calculateRange(height);
  let horizontalRange = calculateRange(width);
  //   console.log("verticalRange:", verticalRange);
  //   console.log("horizontalRange:", horizontalRange);

  const coordinates = getCoordinates(verticalRange, horizontalRange);

  const allSquares = getAllSquares(image, coordinates);
  //   console.log('allSquares: ',allSquares);
  const groupedSquares = groupSquares(allSquares, horizontalRange.length);
  //   console.log('groupedSquares: ', groupedSquares);

  return groupedSquares.map((groupedSquare) => {
    return groupedSquare.map((square) => {
      return calculateSquareBoxBlur(square);
    });
  });
}
