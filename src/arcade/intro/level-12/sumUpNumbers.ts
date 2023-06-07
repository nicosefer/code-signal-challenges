// https://app.codesignal.com/arcade/intro/level-12/YqZwMJguZBY7Hz84T/

function solution(inputString: string): number {
  let numbers = inputString.match(/(\d+)/g);

  if (numbers === null) {
    return 0;
  }

  return numbers.reduce((acc, number) => {
    acc += parseInt(number);
    return acc;
  }, 0);
}
