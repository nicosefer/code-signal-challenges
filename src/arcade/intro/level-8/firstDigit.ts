// https://app.codesignal.com/arcade/intro/level-8/rRGGbTtwZe2mA8Wov/solutions

function solution(inputString: string): string | null {
  const digitFounds = inputString.match(/(\d)/g);
  return digitFounds ? digitFounds[0] : null;
}
