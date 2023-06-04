// https://app.codesignal.com/arcade/intro/level-5/g6dc9KJyxmFjB98dL

function solution(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  return (
    (yourLeft === friendsLeft || yourLeft === friendsRight) &&
    (yourRight === friendsLeft || yourRight === friendsRight)
  );
}
