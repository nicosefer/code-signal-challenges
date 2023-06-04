// https://app.codesignal.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ/solutions

function solution(s: string): number {
  const characterSet = new Set();
  for (let i = 0; i < s.length; i++) {
    characterSet.add(s[i]);
  }
  return characterSet.size;
}
