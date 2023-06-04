// https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

function solution(picture: string[]): string[] {
  let partial = picture.map((row) => `*${row}*`);
  let widthLength = partial[0].length;

  let upperBorder = '';
  let bottomBorder = '';
  for (let i = 0; i < widthLength; i++) {
    upperBorder += '*';
    bottomBorder += '*';
  }

  let output: string[] = [upperBorder, ...partial, bottomBorder];
  return output;
}
