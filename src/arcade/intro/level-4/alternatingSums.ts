// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

function solution(a: number[]): number[] {
  let teamA: number[] = [];
  let teamB: number[] = [];

  a.forEach((weight: number, index: number) => {
    if (index % 2 === 0) {
      teamA.push(weight);
    } else {
      teamB.push(weight);
    }
  });

  return [
    teamA.reduce((acc: number, weight: number) => {
      return acc + weight;
    }, 0),

    teamB.reduce((acc: number, weight: number) => {
      return acc + weight;
    }, 0),
  ];
}
