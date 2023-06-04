// https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

function solution(floors: number[][]): number {
  let accum = 0;
  let columnCount = floors[0].length;
  let alignedGroupedRooms: number[][] = [];

  for (let i = 0; i < columnCount; i++) {
    let groupedRooms = [];
    for (let x = 0; x < floors.length; x++) {
      groupedRooms.push(floors[x][i]);
    }
    alignedGroupedRooms.push(groupedRooms);
  }

  for (let i = 0; i < alignedGroupedRooms.length; i++) {
    let alignedRooms = alignedGroupedRooms[i];
    for (let y = 0; y < alignedRooms.length; y++) {
      const price = alignedRooms[y];
      if (price === 0) {
        break;
      }
      accum += price;
    }
  }

  return accum;
}
