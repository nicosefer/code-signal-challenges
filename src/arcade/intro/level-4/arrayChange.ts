// https://app.codesignal.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg

function solution(inputArray: number[]): number {
  let movements = 0;
  let clonedInput = [...inputArray];

  for (let i = 1; i < clonedInput.length; i++) {
    const prevValue = clonedInput[i - 1];
    const currentValue = clonedInput[i];
    let diff = prevValue - currentValue;
    let valuesToAdd = 0;

    if (currentValue === prevValue) {
      valuesToAdd = 1;
    } else if (currentValue < prevValue) {
      valuesToAdd = diff + 1;
    }

    movements = movements + valuesToAdd;
    clonedInput[i] = currentValue + valuesToAdd;
  }

  return movements;
}
