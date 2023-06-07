// https://app.codesignal.com/arcade/intro/level-10/HJ2thsvjL25iCvvdm/solutions

function solution(inputString: string): boolean {
  const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return Boolean(inputString.match(macAddressRegex));
}
