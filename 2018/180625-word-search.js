/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

var exist = function(board, word) {
  let ans = false;
  loop1: for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && !ans) {
        ans = helper(board, i, j, word, 1, { [i + '' + j]: true });
      }
      if (ans) {
        break loop1;
        break;
      }
    }
  }
  console.log(ans);
  return ans;
};

function helper(board, i, j, word, ind, hash) {
  if (ind === word.length) {
    return true;
  } else if (
    board[i + 1] &&
    board[i + 1][j] &&
    board[i + 1][j] === word[ind] &&
    !hash[i + 1 + '' + j]
  ) {
    hash[i + 1 + '' + j] = true;
    return helper(board, i + 1, j, word, ++ind, hash);
  }
  if (
    board[i - 1] &&
    board[i - 1][j] &&
    board[i - 1][j] === word[ind] &&
    !hash[i - 1 + '' + j]
  ) {
    hash[i - 1 + '' + j] = true;
    return helper(board, i - 1, j, word, ++ind, hash);
  }
  if (board[i][j + 1] === word[ind] && !hash[i + '' + (j + 1)]) {
    hash[i + '' + (j + 1)] = true;
    return helper(board, i, j + 1, word, ++ind, hash);
  }
  if (board[i][j - 1] === word[ind] && !hash[i + '' + (j - 1)]) {
    hash[i + '' + (j - 1)] = true;
    return helper(board, i, j - 1, word, ++ind, hash);
  }
  return false;
}

var board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
var board2 = [['a', 'a']];
var board3 = [['C', 'A', 'A'], ['A', 'A', 'A'], ['B', 'C', 'D']];

exist(board, 'ABCCED');
exist(board2, 'aaa');
exist(board3, 'AAB');
