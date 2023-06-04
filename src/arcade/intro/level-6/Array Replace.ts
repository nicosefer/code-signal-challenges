// https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm

function solution(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  return inputArray.map((value) => {
    if (value === elemToReplace) {
      return substitutionElem;
    }
    return value;
  });
}
