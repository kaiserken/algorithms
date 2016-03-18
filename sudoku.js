"use strict"

function validSolution(board){
  var temp = true;
  var columns = [];
  var grid = [];
  grid[0] = board[0].slice(0,3).concat(board[1].slice(0,3), board[2].slice(0,3));
  grid[1] = board[3].slice(0,3).concat(board[4].slice(0,3), board[5].slice(0,3));
  grid[2] = board[6].slice(0,3).concat(board[7].slice(0,3), board[8].slice(0,3));
  grid[3] = board[0].slice(3,6).concat(board[1].slice(3,6), board[2].slice(3,6));
  grid[4] = board[3].slice(3,6).concat(board[4].slice(3,6), board[5].slice(3,6));
  grid[5] = board[6].slice(3,6).concat(board[7].slice(3,6), board[8].slice(3,6));
  grid[6] = board[0].slice(6,9).concat(board[1].slice(6,9), board[2].slice(6,9));
  grid[7] = board[3].slice(6,9).concat(board[4].slice(6,9), board[5].slice(6,9));
  grid[8] = board[6].slice(6,9).concat(board[7].slice(6,9), board[8].slice(6,9));
  for (var i = 0; i< board.length; i++){
    columns[i]=[];
    for (var j = 0; j< board.length; j++){
      columns[i][j] = board[j][i];
    }
    var columnSum = columns[i].reduce(function(sum, element){return sum + element;},0);
    var rowSum  = board[i].reduce(function(sum, element){return sum + element;},0);
    var gridSum  = grid[i].reduce(function(sum, element){return sum + element;},0);
    if (columnSum!= 45 || rowSum!= 45 || gridSum!= 45){temp = false;}
  }
  return temp;
}

console.log(validSolution(
  [[5, 3, 4, 6, 7, 8, 9, 1, 2],
   [6, 7, 2, 1, 9, 5, 3, 4, 8],
   [1, 9, 8, 3, 4, 2, 5, 6, 7],
   [8, 5, 9, 7, 6, 0, 4, 2, 3],
   [4, 2, 6, 8, 5, 3, 7, 9, 1],
   [7, 1, 3, 9, 2, 4, 8, 5, 6],
   [9, 6, 1, 5, 3, 7, 2, 8, 4],
   [2, 8, 7, 4, 1, 9, 6, 3, 5],
   [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
