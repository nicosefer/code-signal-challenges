// https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui

function solution(inputString: string): string {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let output = inputString
    .split('')
    .map((letter) => {
      let index = letters.indexOf(letter);
      let next = letters[index + 1] || letters[0];
      return next;
    })
    .join('');

  return output;
}
