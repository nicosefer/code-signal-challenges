// https://app.codesignal.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE/solutions

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function solution(inputString: string): boolean {
  const letterCounts = alphabet.split('').map(() => {
    return 0;
  });

  for (let i = 0; i < inputString.length; i++) {
    const letter = inputString[i];
    const letterIndex = alphabet.indexOf(letter);
    letterCounts[letterIndex] = letterCounts[letterIndex] + 1;
  }

  return letterCounts.every((count, index) => {
    const nextCount = letterCounts[index + 1];
    return nextCount !== undefined ? count >= nextCount : true;
  });
}
