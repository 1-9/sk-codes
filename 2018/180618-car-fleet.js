var carFleet = (module.exports = function(target, position, speed) {
  let time = [],
    ans = 0;

  for (let i = 0; i < position.length; i++) {
    time[target - position[i]] = (target - position[i]) / speed[i];
  }

  let max = 0;

  for (let i of time) {
    if (i > max) {
      ans++;
      max = i;
    }
  }
  return ans;
});

carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
carFleet(0, [9], []);
