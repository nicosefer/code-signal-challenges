// https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3/solutions

function solution(inputString: string): string {
  const digits = inputString.match(/^(\d+)/);

  if (!digits) {
    return '';
  }

  return digits[0];
}
