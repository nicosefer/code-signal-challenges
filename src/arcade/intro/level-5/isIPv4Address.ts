// https://app.codesignal.com/arcade/intro/level-5/veW5xJednTy4qcjso

function solution(inputString: string): boolean {
  let ipParts = inputString.split('.');

  // early return if there's not 4 parts
  if (ipParts.length !== 4) {
    return false;
  }

  let output = ipParts.every((ipPart) => {
    const areAllDigits = ipPart.match(/^\d+$/g);

    if (!areAllDigits) {
      return false;
    }

    // break on 0 padded values
    const isZero = ipPart.startsWith('0');
    if (isZero && ipPart.length > 1) {
      return false;
    }

    const ipNumber = parseInt(ipPart);

    if (ipNumber < 0 || ipNumber > 255) {
      return false;
    }

    return true;
  });

  return output;
}
