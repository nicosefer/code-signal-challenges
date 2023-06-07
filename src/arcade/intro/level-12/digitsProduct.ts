// https://app.codesignal.com/arcade/intro/level-12/NJJhENpgheFRQbPRA/

function solution(product: number): number {
  if (product === 0) {
    return 10;
  }

  if (product === 1) {
    return 1;
  }

  let result = '';
  let currentProduct = product;

  for (let digit = 9; digit >= 2; digit--) {
    while (currentProduct % digit === 0) {
      result = digit + result;
      currentProduct /= digit;
    }
  }

  if (currentProduct !== 1) {
    return -1;
  }

  return parseInt(result, 10);
}
