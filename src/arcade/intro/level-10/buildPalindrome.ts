// https://app.codesignal.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx/

function isPalindrome(st: string): boolean {
  return st === st.split('').reverse().join('');
}
function solution(st: string): string {
  let newString = st;
  let lastIndex = 0;
  const lettersToAdd: string[] = [];
  while (!isPalindrome(newString)) {
    let letterToAdd = st[lastIndex];
    lettersToAdd.unshift(letterToAdd);
    newString = st + lettersToAdd.join('');
    lastIndex++;
  }

  return newString;
}
