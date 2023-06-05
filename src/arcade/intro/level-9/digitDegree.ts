// https://app.codesignal.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo/solutions

function solution(n: number): number {
  let nString = n.toString();
  if (nString.length === 1) {
    return 0;
  }

  let iteration = 0;
  let tmpSumString = nString;

  do {
    const sum = tmpSumString.split('').reduce((acc, value) => {
      acc += parseInt(value, 10);
      return acc;
    }, 0);
    tmpSumString = sum.toString();
    iteration++;
  } while (tmpSumString.length > 1);

  return iteration;
}
