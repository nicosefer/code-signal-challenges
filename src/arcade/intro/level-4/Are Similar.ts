// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

function areSimilar(
  toControlValues: number[],
  toCompareValues: number[]
): boolean {
  let output = true;

  for (let i = 0; i < toControlValues.length; i++) {
    let currentValue = toControlValues[i];
    let valueToCompare = toCompareValues[i];
    let currentIndex = i;

    if (currentValue === valueToCompare) {
      continue;
    }

    let indexesToSwapTo: number[] = toControlValues.reduce<number[]>(
      (accum, value, index) => {
        if (
          index > i &&
          value === valueToCompare &&
          toCompareValues[index] === currentValue // performance check
        ) {
          accum.push(index);
        }
        return accum;
      },
      []
    );

    // early return if there's no numbers to swap
    if (!indexesToSwapTo.length) {
      output = false;
      break;
    }

    let swapSuccess = false;
    indexesToSwapTo.forEach((indexToSwap) => {
      // swap original and compare each
      let swapedArray = [...toControlValues];
      swapedArray[currentIndex] = toControlValues[indexToSwap];
      swapedArray[indexToSwap] = toControlValues[currentIndex];

      if (areEqual(swapedArray, toCompareValues)) {
        swapSuccess = true;
        return;
      }
    });

    if (swapSuccess) {
      output = true;
      break;
    }
  }

  return output;
}

function areEqual(a: number[], b: number[]): boolean {
  return a.every((item, index) => item === b[index]);
}

function solution(a: number[], b: number[]): boolean {
  // early return if there are identical
  if (a.every((item, index) => item === b[index])) {
    return true;
  }

  const areSimilarAtoB = areSimilar(a, b);

  if (areSimilarAtoB) {
    return true;
  }

  const areSimilarBtoA = areSimilar(b, a);
  return areSimilarBtoA;
}
