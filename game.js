class Game {
  constructor() {
    this.board = new Board(6, 7)
    this.player1 = new HumanPlayer("Noe", "r")
    this.player2 = new HumanPlayer("Corey", "b")
    this.currentPlayer = this.player1
  }


  turn(col) {
    if (this.board.placeMarker(col, this.currentPlayer.sym)) {
      if(!this.isGameOver()) {
        this.switchPlayer();
      }
    } else {
      console.log("error in turn func")
    }
  }

  isGameOver() {
    return this.board.checkWinner()
  }

  switchPlayer() {
    return this.currentPlayer = this.currentPlayer === this.player1 ?
      this.player2 : this.player1;
  }
}
