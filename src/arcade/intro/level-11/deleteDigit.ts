// https://app.codesignal.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX/

function solution(n: number): number {
  let maxNumber = 0;
  let numberArray = n
    .toString()
    .split('')
    .map((numberString: string) => parseInt(numberString));

  for (let i = 0; i < numberArray.length; i++) {
    let tmp = [...numberArray];
    tmp.splice(i, 1);
    let remaining = parseInt(tmp.join(''), 10);

    if (remaining > maxNumber) {
      maxNumber = remaining;
    }
  }

  return maxNumber;
}
