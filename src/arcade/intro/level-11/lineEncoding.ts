// https://app.codesignal.com/arcade/intro/level-11/o2uq6eTuvk7atGadR/

function solution(s: string): string {
  const disjoints: string[][] = [];
  let tmpDisjoint: string[] | null = null;
  let lastChar: string = '';

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (currentChar !== lastChar) {
      if (tmpDisjoint !== null) {
        disjoints.push(tmpDisjoint);
      }
      tmpDisjoint = [];
      tmpDisjoint.push(currentChar);
      lastChar = currentChar;
    } else {
      (tmpDisjoint as string[]).push(currentChar);
      lastChar = currentChar;
    }
  }

  if (tmpDisjoint !== null) {
    disjoints.push(tmpDisjoint);
  }

  return disjoints
    .map((disjoint: string[]) => {
      const count = disjoint.length;
      const [char] = disjoint;

      if (count > 1) {
        return `${count}${char}`;
      } else {
        return char;
      }
    })
    .join('');
}
