var minRefuelStops = function(target, startFuel, stations) {
  let fuels = [],
    stops = 0,
    newFuel;

  while (true) {
    if (checkTarget()) {
      return stops;
    }
    for (let i = 0; i < stations.length; i++) {
      let [distance, fuel] = stations[i];
      if (distance > startFuel) {
        break;
      }
      fuels.push(fuel);
      stations.shift();
      i--;
    }

    newFuel = startFuel + maxFuel();

    if (startFuel < newFuel) {
      startFuel = newFuel;
      stops++;
      if (checkTarget()) {
        return stops;
      }
    } else {
      return -1;
    }
  }

  function checkTarget() {
    return startFuel >= target;
  }

  function maxFuel() {
    return fuels.sort((a, b) => a - b).pop() || 0;
  }
};

minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]); // 2
minRefuelStops(1, 1, []); // 0
minRefuelStops(100, 1, [[10, 100]]); // -1
minRefuelStops(100, 50, [[25, 25], [50, 50]]); // 1
minRefuelStops(100, 50, [[25, 30]]); // -1
minRefuelStops(100, 1000, []); // 0
minRefuelStops(100, 50, [[50, 50]]); // 1
