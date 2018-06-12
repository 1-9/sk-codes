/**
 * @param {number[]} seats
 * @return {number}
 */

var maxDistToClosest = function(seats) {
  let length = seats.length - 1,
    max = 0;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      let prev = seats.lastIndexOf(1, i);
      let next = seats.indexOf(1, i);
      let currentMax;
      if (prev === -1) {
        prev = 0;
        currentMax = next - prev;
      } else if (next === -1) {
        next = length;
        currentMax = length - prev;
      } else {
        currentMax = Math.min(next - i, i - prev);
      }
      max = currentMax > max ? currentMax : max;
    }
  }
  return max;
};

maxDistToClosest([1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0]); // 4
maxDistToClosest([0, 0, 0, 0, 0, 1]); // 5
maxDistToClosest([0, 0, 1, 0, 0, 0]); // 3
maxDistToClosest([0, 1]); // 1
maxDistToClosest([1, 0, 0]); // 2
maxDistToClosest([1, 0, 0, 0, 1, 0, 1]); // 2
maxDistToClosest([1, 0, 0, 0]); // 3
maxDistToClosest([0, 1, 0, 0, 1]); // 1
