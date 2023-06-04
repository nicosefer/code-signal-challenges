// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function solution(data: number[]): number[] {
  let output: number[] = [];

  const treeIndexes: number[] = [];
  data.forEach((value, index) => {
    if (value === -1) {
      treeIndexes.push(index);
    }
  });

  const sortedPeopleSegments: number[] = data
    .filter((item) => item !== -1)
    .sort((a, b) => a - b);

  output = [...sortedPeopleSegments];
  for (let i = 0; i < treeIndexes.length; i++) {
    let treeIndex = treeIndexes[i];
    let treeValue = -1;
    output.splice(treeIndex, 0, treeValue);
  }

  return output;
}
