// https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R/

function solution(inputArray: number[], k: number): number[] {
  return inputArray.filter((number, index) => (index + 1) % k !== 0);
}
