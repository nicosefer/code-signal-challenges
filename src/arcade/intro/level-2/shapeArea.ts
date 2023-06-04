// https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

function solution(n: number) {
  const SIDES = 4;
  let acc = 1;

  for (let i = 1; i <= n; i++) {
    acc = acc + SIDES * (i - 1);
  }

  return acc;
}
