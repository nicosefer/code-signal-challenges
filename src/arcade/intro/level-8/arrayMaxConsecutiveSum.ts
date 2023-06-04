// https://app.codesignal.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5/

function solution(inputArray: number[], k: number): number {
  let maxSum = 0;

  for (let i = 0; i <= inputArray.length - k; i++) {
    const startIndex = i;
    let iterations = 0;
    let tmpResult = 0;
    do {
      let value = inputArray[startIndex + iterations];
      if (value === undefined) {
        break;
      }
      tmpResult += value;
      iterations++;
    } while (iterations < k);

    if (tmpResult > maxSum) {
      maxSum = tmpResult;
    }
  }
  return maxSum;
}
