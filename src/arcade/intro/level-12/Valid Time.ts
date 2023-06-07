// https://app.codesignal.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5

function solution(time: string): boolean {
  let [hour, min] = time.split(':');
  let hourNumber = parseInt(hour, 10);
  let minNumber = parseInt(min, 10);
  let output = true;

  if (hourNumber < 0 || hourNumber > 23) {
    output = false;
  } else if (minNumber < 0 || minNumber > 59) {
    output = false;
  }

  return output;
}
