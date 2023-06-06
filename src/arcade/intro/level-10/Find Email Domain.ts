// https://app.codesignal.com/arcade/intro/level-10/TXFLopNcCNbJLQivP

function solution(address: string): string | undefined {
  let [, ...domain] = address.split('@');
  return domain.pop();
}
