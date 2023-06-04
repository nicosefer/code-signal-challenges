// https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ

function createSequentialArray(max: number, start: number): number[] {
  let output = [];
  let count = max;
  let lastNumber = null;
  do {
    if (lastNumber === null) {
      lastNumber = start;
    } else {
      lastNumber++;
      if (lastNumber >= max) {
        lastNumber = 0;
      }
    }
    output.push(lastNumber);
    count--;
  } while (count);

  return output;
}

function solution(n: number, firstNumber: number): number {
  const sequentialArray = createSequentialArray(n, firstNumber);
  let opositeNumber = sequentialArray[n / 2];
  return opositeNumber;
}
