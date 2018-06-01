/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

var canVisitAllRooms = function(rooms) {
  let ans = [true];
  helper(rooms, 0, ans);
  console.log(rooms.length === ans.filter(v => v !== undefined).length);
  return rooms.length === ans.filter(v => v !== undefined).length;
};

function helper(rooms, ind = 0, visited = []) {
  for (let i = 0; i < rooms[ind].length; i++) {
    if (!visited[rooms[ind][i]]) {
      visited[rooms[ind][i]] = true;
      helper(rooms, rooms[ind][i], visited);
    }
  }
}

canVisitAllRooms([[1], [2], [3], []]); // true
canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]); // false
canVisitAllRooms([[2, 3], [], [2], [1, 3, 1]]); // true
