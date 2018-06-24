var carFleet = (module.exports = function(target, position, speed) {
  let time = {},
    ans = 0,
    min = 0;

  for (let [ind, val] of position.entries()) {
    time[target - val] = (target - val) / speed[ind];
  }

  for (let t in time) {
    if (time[t] > min) {
      min = time[t];
      ans++;
    }
  }
  return ans;
});

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]); // 3
carFleet(0, [9], []); // 0
