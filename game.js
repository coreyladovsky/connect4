class Game {
  constructor() {
    this.board = new Board(6, 7)
    this.player1 = new HumanPlayer("Noe", "r")
    this.player2 = new HumanPlayer("Corey", "b")
    this.currentPlayer = this.player1
  }


  turn(pos) {
    if (this.board.placeMarker(pos, this.currentPlayer.sym)) {
      this.switchPlayer();
    } else {
      console.log("error in turn func")
    }
  }

  switchPlayer() {
    return this.currentPlayer = this.currentPlayer === this.player1 ?
      this.player2 : this.player1;
  }
}
