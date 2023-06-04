// https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC

function solution(statues: number[]): number {
  if (statues.length > 20 || statues.length <= 1) {
    return 0;
  }
  let remainingStatues = 0;
  let sortedStatus = statues.sort((a, b) => a - b);

  for (let i = 0; i < sortedStatus.length; i++) {
    if (sortedStatus[i] < 1) {
      sortedStatus[i] = 0;
    }

    if (sortedStatus[i] > 20) {
      sortedStatus[i] = 20;
    }

    const current = sortedStatus[i];
    const next = sortedStatus[i + 1];

    if (!next) {
      continue;
    }

    let diff = next - current;
    console.log(`diff between ${next} & ${current} : ${diff - 1}`);

    remainingStatues += diff - 1;
  }

  return remainingStatues;
}
