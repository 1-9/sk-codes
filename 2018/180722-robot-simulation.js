var robotSim = function(commands, obstacles) {
  let directionChanges = {
      '-2': {
        left: 'down',
        up: 'left',
        right: 'up',
        down: 'right'
      },
      '-1': {
        left: 'up',
        up: 'right',
        right: 'down',
        down: 'left'
      }
    },
    direction = 'up',
    origin = [0, 0],
    start = [0, 0],
    ans = 0;

  obstacles = obstaclesMap(obstacles);

  for (let i = 0; i < commands.length; i++) {
    let directionChange = directionChanges[commands[i]],
      command;
    if (directionChange) {
      direction = directionChange[direction];
    } else {
      command = commands[i];

      if (direction === 'up') {
        while (command > 0) {
          start[1]++;
          command--;
          let hasObstacle = obstacles[start[0]];
          if (hasObstacle && hasObstacle[start[1]]) {
            start[1]--;
            break;
          }
        }
      } else if (direction === 'down') {
        while (command > 0) {
          start[1]--;
          command--;
          let hasObstacle = obstacles[start[0]];
          if (hasObstacle && hasObstacle[start[1]]) {
            start[1]++;
            break;
          }
        }
      } else if (direction === 'left') {
        while (command > 0) {
          start[0]--;
          command--;
          let hasObstacle = obstacles[start[0]];
          if (hasObstacle && hasObstacle[start[1]]) {
            start[0]++;
            break;
          }
        }
      } else if (direction === 'right') {
        while (command > 0) {
          start[0]++;
          command--;
          let hasObstacle = obstacles[start[0]];
          if (hasObstacle && hasObstacle[start[1]]) {
            start[0]--;
            break;
          }
        }
      }
    }
    ans = Math.max(ans, Math.pow(start[0], 2) + Math.pow(start[1], 2));
  }
  return ans;
};

function obstaclesMap(obstacles) {
  let ans = {};
  for (let i = 0; i < obstacles.length; i++) {
    let current = ans[obstacles[i][0]];
    if (!current) {
      ans[obstacles[i][0]] = {};
    }
    current = ans[obstacles[i][0]];
    current[obstacles[i][1]] = true;
  }
  return ans;
}

robotSim([4, -1, 3], []); // 25
robotSim([4, -1, 4, -2, 4], [[2, 4]]); // 65
robotSim(
  [-2, -1, -2, 3, 7],
  [
    [1, -3],
    [2, -3],
    [4, 0],
    [-2, 5],
    [-5, 2],
    [0, 0],
    [4, -4],
    [-2, -5],
    [-1, -2],
    [0, 2]
  ]
); // 100
