// https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq

function calculateAbs(a: number[], x: number): number {
  return a.reduce((acc, val) => {
    const result = Math.abs(val - x);
    acc += result;
    return acc;
  }, 0);
}

function solution(a: number[]): number {
  let lowestAbsValue: number | null = null;
  let lowestValue = null;

  a.forEach((value) => {
    const result = calculateAbs(a, value);
    console.log(`abs for: ${value} is: ${result}`);
    if (lowestAbsValue === null) {
      lowestAbsValue = result;
      lowestValue = value;
    } else if (result < lowestAbsValue) {
      lowestAbsValue = result;
      lowestValue = value;
    }
  });

  return lowestValue as unknown as number;
}
