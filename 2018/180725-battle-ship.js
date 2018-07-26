var countBattleships = function(board) {
  let placesVisited = {},
    ans = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X' && !placesVisited[[i, j]]) {
        let row = i,
          column = j;
        while (board[row + 1] && board[row + 1][j] === 'X') {
          row++;
          placesVisited[[row, j]] = true;
        }
        while (board[i][column + 1] === 'X') {
          column++;
          placesVisited[[i, column]] = true;
        }
        ans++;
        placesVisited[[i, j]] = true;
      }
    }
  }
  return ans;
};
