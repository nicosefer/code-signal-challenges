// https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

function solution(inputString: string): string {
  const stack: string[] = [];
  let currentString = '';

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
      stack.push(currentString);
      currentString = '';
    } else if (inputString[i] === ')') {
      currentString = stack.pop() + currentString.split('').reverse().join('');
    } else {
      currentString += inputString[i];
    }
  }

  return currentString;
}
