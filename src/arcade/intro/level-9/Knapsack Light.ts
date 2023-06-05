// https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2/solutions

function solution(
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number
): number {
  if (maxW < weight1 && maxW < weight2) {
    return 0;
  }

  let valueToTake = 0;
  let remainingWeigth = maxW;

  if (weight1 > maxW) {
    valueToTake += value2;
    remainingWeigth -= weight2;
  } else if (weight2 > maxW) {
    valueToTake += value1;
    remainingWeigth -= weight1;
  } else {
    if (value1 >= value2) {
      valueToTake += value1;
      remainingWeigth -= weight1;
      if (remainingWeigth >= weight2) {
        valueToTake += value2;
        remainingWeigth -= weight2;
      }
    } else {
      valueToTake += value2;
      remainingWeigth -= weight2;
      if (remainingWeigth >= weight1) {
        valueToTake += value1;
        remainingWeigth -= weight1;
      }
    }
  }

  return valueToTake;
}
