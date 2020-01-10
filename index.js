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

  horizontalCheck(pos) {
    let [row, col] = pos;
    let fullRow = this.grid[row];
    for(let i = 0; i < fullRow.length; i++) {
      if(i + 4 > fullRow.length) return false;
      let slice = fullRow.slice(i, i + 4);
      if(slice.every(el => el === slice[0])) return true;
    }
    return false;
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
console.log(board.horizontalCheck([0, 2]))
