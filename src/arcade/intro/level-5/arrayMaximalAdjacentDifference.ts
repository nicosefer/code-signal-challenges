// https://app.codesignal.com/arcade/intro/level-5/EEJxjQ7oo7C5wAGjE

function solution(inputArray: number[]): number {
  let maxDiff = 0;

  for (let i = 1; i < inputArray.length; i++) {
    const prevValue = inputArray[i - 1];
    const currentValue = inputArray[i];
    let diff = currentValue - prevValue;

    if (diff < 0) {
      diff = diff * -1;
    }

    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
}
