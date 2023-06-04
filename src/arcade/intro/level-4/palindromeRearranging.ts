// https://app.codesignal.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

function solution(inputString: string): boolean {
  let letterMapCount: Record<string, number> = {};
  for (let i = 0; i < inputString.length; i++) {
    const letter = inputString[i];
    letterMapCount[letter] = (letterMapCount[letter] || 0) + 1;
  }

  let evenCount = 0;
  for (let i in letterMapCount) {
    let count = letterMapCount[i];
    if (count % 2 !== 0) {
      evenCount = evenCount + 1;
    }
  }

  return !evenCount || evenCount == 1;
}
