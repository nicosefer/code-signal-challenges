// https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5

function getMaxConsecutiveObstacles(sortedObstacles: number[]) {
  let maxConsecutiveObstacles = 0;
  let lastObstacle = sortedObstacles[0];
  let accum = 0;
  for (let i = 1; i < sortedObstacles.length; i++) {
    const current = sortedObstacles[i];
    if (current === lastObstacle + 1) {
      accum += 1;
      lastObstacle = current;

      if (i == sortedObstacles.length - 1) {
        if (accum > maxConsecutiveObstacles) {
          maxConsecutiveObstacles = accum;
        }
      }
      continue;
    }

    lastObstacle = current;
    if (accum > 0 && accum > maxConsecutiveObstacles) {
      maxConsecutiveObstacles = accum;
      accum = 0;
    }
  }
  return maxConsecutiveObstacles;
}

function splitArray(numbers: number[], n: number): number[] {
  const result: number[] = [];
  const length = numbers.length;

  for (let i = 0; i <= length; i += n) {
    const tmp = numbers.slice(i, i + n + 1);
    const lastElement = tmp[tmp.length - 1];
    result.push(lastElement);
  }

  return result;
}

function solution(inputArray: number[]): number {
  const sortedObstacles = inputArray.sort((a, b) => a - b);
  let initialMinimalJumpLength =
    getMaxConsecutiveObstacles(sortedObstacles) + 2;
  const end = sortedObstacles[sortedObstacles.length - 1] + 1;

  let minimalJumpLength = initialMinimalJumpLength;
  let success = false;

  const steps: number[] = Array.from(Array(end + 1).keys());
  do {
    // split the array into chunks of minimalJumpLength
    // detect if the last item of each chunk has an obstacle
    const splitedSteps = splitArray(steps, minimalJumpLength);

    const result = sortedObstacles.every((obstacle) => {
      return !splitedSteps.includes(obstacle);
    });

    if (!result) {
      minimalJumpLength += 1;
    } else {
      success = true;
    }
  } while (!success);

  return minimalJumpLength;
}
