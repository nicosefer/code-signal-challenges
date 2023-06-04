// https://app.codesignal.com/arcade/intro/level-6/6Wv4WsrsMJ8Y2Fwno

function solution(name: string): boolean {
  return !!name.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/);
}
