// https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW

function solution(n: number): boolean {
  return n
    .toString()
    .split('')
    .every((numberString) => parseInt(numberString, 10) % 2 === 0);
}
