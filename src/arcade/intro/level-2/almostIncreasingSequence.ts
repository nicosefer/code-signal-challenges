// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function solution(sequence: number[]): boolean {
  let output = true;
  let removedIndex: number | null = null;
  let length = sequence.length;

  // fast return check
  if (length == 1) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    let prevValue = sequence[i - 1];
    let currentValue = sequence[i];
    let currentIndex = i;
    let nextValue = sequence[i + 1];

    if (removedIndex !== null && currentIndex == removedIndex + 1) {
      prevValue = sequence[removedIndex - 1];
    }

    const hasNextValue = nextValue !== undefined;
    const hasPrevValue = prevValue !== undefined;

    // first element
    if (!hasPrevValue && hasNextValue && currentValue < nextValue) {
      continue;
    }

    // last element
    if (!hasNextValue && hasPrevValue && currentValue > prevValue) {
      continue;
    }

    // sequence: [1, 2, 1, 2]

    if (hasPrevValue && currentValue <= prevValue) {
      if (removedIndex !== null) {
        output = false;
        break;
      }

      removedIndex = currentIndex;
      continue;
    }

    if (currentValue >= nextValue && (nextValue > prevValue || !hasPrevValue)) {
      if (removedIndex !== null) {
        output = false;
        break;
      }

      removedIndex = currentIndex;
      continue;
    }
  }

  return output;
}
