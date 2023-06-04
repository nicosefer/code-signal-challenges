// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

function solution(inputArray: number[]): number | null {
  let greaterResult = null;
  for (let i = 0; i < inputArray.length; i++) {
    const result = inputArray[i] * inputArray[i + 1];
    if (greaterResult == null || result > greaterResult) {
      greaterResult = result;
    }
  }
  return greaterResult;
}
