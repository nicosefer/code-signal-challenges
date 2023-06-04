// https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9/solutions

function areConsecutivePairs(str1: string, str2: string): boolean {
  let countDiff = 0;

  for (let i = 0; i < str1.length; i++) {
    const currentLetter = str1[i];
    const targetLetter = str2[i];
    if (currentLetter !== targetLetter) {
      countDiff++;
    }
  }

  return countDiff === 1;
}

function getAllPermutations(strings: string[]): string[][] {
  const output: string[][] = [];

  function generatePermutations(arr: string[], start: number) {
    if (start === arr.length - 1) {
      output.push([...arr]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      generatePermutations(arr, start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }

  generatePermutations(strings, 0);
  return output;
}

function solution(inputArray: string[]): boolean {
  let output = false;
  const permutations = getAllPermutations(inputArray);

  for (let i = 0; i < permutations.length; i++) {
    const permutation = permutations[i];
    let permutationResult = true;
    for (let j = 0; j < permutation.length - 1; j++) {
      const currentString = permutation[j];
      const nextString = permutation[j + 1];
      const areConsecutivePairsResult = areConsecutivePairs(
        currentString,
        nextString
      );
      if (!areConsecutivePairsResult) {
        permutationResult = false;
        break;
      }
    }
    if (permutationResult === true) {
      output = true;
      break;
    }
  }

  return output;
}
