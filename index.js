class Board {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    // this.grid = this.makeBoard(height, width)
    this.grid = [ [ null, null, null, null, null, null, null ],
  [ null, null, null, null, null, null, null ],
  [ null, null, null, null, null, null, null ],
  [ null, null, null, null, null, null, null ],
  [ null, null, null, null, null, null, null ],
  [ null, null, null, null, null, null, null ] ]
  }

  makeBoard(height, width) {
    let output = new Array(height).fill(null)
    return output.map(el => new Array(width).fill(null))
  }

  checkWinner(pos) {

  }

  verticalCheck(pos) {
    let [row, col] = pos;
    if(row + 3 >= this.height) return false;
    for(let i = row; i < row + 3; i++) {
      if(this.grid[i][col] !== this.grid[row][col]) {
        return false;
      }
    }
    return true;
  }
}

let board = new Board(6, 7);
console.log(board.verticalCheck([2, 2]))
