// https://app.codesignal.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma/

function solution(text: string): string {
  let words = text.match(/([a-zA-Z]*)/g);
  if (!words) {
    return '';
  }
  return words.sort((a, b) => b.length - a.length)[0];
}
