var rand10 = function() {
  const choices = [null, [1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
  let first, second;

  while (first > 5 || !first) {
    first = rand7();
  }

  while (second > 6 || !second) {
    second = rand7();
  }

  if (second <= 3) {
    return choices[first][0];
  } else {
    return choices[first][1];
  }
};
