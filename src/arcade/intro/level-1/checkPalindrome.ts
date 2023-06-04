// https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

function solution(inputString: string): boolean {
  const reversed = inputString.split('').reverse().join('');
  return inputString === reversed;
}
