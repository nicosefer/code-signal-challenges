// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function solution(data: string[]): string[] {
  let output: string[] = [];

  let mapIndexLength: Record<number, number> = {};
  let longestLength = 0;

  for (let i = 0; i < data.length; i++) {
    const word = data[i];
    const strLength = word.length;
    mapIndexLength[i] = strLength;
  }

  for (let i in mapIndexLength) {
    const wordLength = mapIndexLength[i];
    if (wordLength >= longestLength) {
      longestLength = wordLength;
    }
  }

  for (let i in mapIndexLength) {
    const wordLength = mapIndexLength[i];
    if (wordLength === longestLength) {
      output.push(data[i]);
    }
  }

  return output;
}
