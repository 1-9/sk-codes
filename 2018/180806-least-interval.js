var leastInterval = function(tasks, n) {
  let c = new Array(26).fill(0),
    ans = 0;
  for (let task of tasks) {
    c[task.charCodeAt() - 65]++;
  }
  c = c.sort((a, b) => b - a).filter(v => v > 0);

  while (c.length) {
    let limit = 0;
    while (limit <= n) {
      if (c[0] === 0) {
        break;
      }
      c[limit]--;
      limit++;
      ans++;
    }
    c = c.sort((a, b) => b - a).filter(v => v > 0);
  }
  console.log(ans);
  return ans;
};

leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2); // 8
leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 50); // 104
leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0); // 6
leastInterval(['A', 'A', 'A', 'C', 'B', 'B', 'B', 'D'], 2); // 8
leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2); // 16
leastInterval(['A', 'A'], 2); // 4
