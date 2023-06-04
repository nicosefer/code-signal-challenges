// https://app.codesignal.com/arcade/intro/level-7/8PxjMSncp9ApA4DAb

function solution(deposit: number, rate: number, threshold: number): number {
  let balance = deposit;
  let years = 0;

  do {
    let interest = (balance * rate) / 100;
    balance += interest;
    years++;
  } while (balance < threshold);

  return years;
}
