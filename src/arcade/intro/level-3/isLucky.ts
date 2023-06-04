// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

function sumNumberString(numberString: string): number {
  let output = 0;
  for (let i = 0; i < numberString.length; i++) {
    output += parseInt(numberString[i]);
  }
  return output;
}

function solution(ticketNumber: number): boolean {
  const numberString = ticketNumber.toString();
  const isEven = numberString.length % 2 === 0;
  const halfIndex = numberString.length / 2;

  const firstHalfPart = numberString.slice(0, halfIndex);
  const lastHalfPart = numberString.slice(halfIndex);

  const firstHalfSum = sumNumberString(firstHalfPart);
  const lastHalfSum = sumNumberString(lastHalfPart);

  return firstHalfSum === lastHalfSum;
}
