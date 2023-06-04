// https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

function getCountLetterMap(str: string): Record<string, number> {
  let output: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    output[str[i]] = output[str[i]] ? output[str[i]] + 1 : 1;
  }
  return output;
}

function solution(str1: string, str2: string): number {
  const str1Map = getCountLetterMap(str1);
  const str2Map = getCountLetterMap(str2);
  let output = 0;

  for (let i in str1Map) {
    let str1Count = str1Map[i];
    let str2Count = str2Map[i];

    if (str2Count !== undefined) {
      output += str1Count > str2Count ? str2Count : str1Count;
    }
  }

  return output;
}
