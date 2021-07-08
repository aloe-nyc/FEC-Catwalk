/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/
var checkForRepeats =(numStr) => {
  var storage = {};
  for (var i = 0; i < numStr.length; i++) {
    storage[numStr[i]] = storage[numStr[i]] || 0;
  }
  for (var num in storage) {
    if (storage[num] > 0) return false;
  }
  return true
}
// Input - string
// Output - boolean - as a string -- 'solved' if the board is valid, 'invalid' if it isn't
// Constraints - idk
// Edge Cases no letters - only numbers - all have to be same length - has to be 9 lines

function sudokuChecker(board) {
  // Your code here.
  var result = 'solved';
  //splitting string at each \n
  var sudokuSet = board.split('\n');
  //console.log(sudokuSet)
  var length = sudokuSet[0].length;
  //9 9 digit inputs
  //checking rows
  for (let i = 0; i < sudokuSet.length; i++) {
    result = checkForRepeats(sudokuSet[i]);
    if (result === false) return 'invalid'
  }
  //console.log('after sudoku set', result)
  //checking columns
  let col = 0;
  while (col < length) {
    var column = ''
    for (let i = 0; i < sudokuSet.length; i++) {
      column += sudokuSet[i][col]
    }
    //console.log(column)
    result = checkForRepeats(column)
    if (result === 'false') return 'invalid'
    col++
  }
  //console.log('after column', result)

  //checking 3 X 3s
  let grids =[];
   for(var i = 0, j = 2; j < sudokuSet.length; i+=3, j+=3) {
     let grid = ''
     for (var k = 0; k < sudokuSet.length; k++) {
       grid += sudokuSet[k].slice(i, j+1)
       if (grid.length === length) {
         grids.push(grid);
         grid='';
       }
     }
   }
  grids.forEach( grid => {
     return checkForRepeats(grid);
   })
  //console.log('after forEach', result)
  return result === true ? 'solved' : 'invalid';
}

console.log(sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429")) //valid

console.log(sudokuChecker("735814296\n896275313\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429")) //896275314 changed to n896275313, invalid
console.log(sudokuChecker("111111111\n222222222\n333333333\n444444444\n555555555\n666666666\n777777777\n888888888\n999999999")) //invalid

console.log(sudokuChecker("524698731\n967531824\n381742596\n719325648\n436871952\n258416379\n893154267\n672983415\n145267983")) //invalid

console.log(sudokuChecker("123123123\n456456456\n789789789\n123123123\n456456456\n789789789\n123123123\n456456456\n789789789")) //invalid