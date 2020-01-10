class View {
  constructor(el, game) {
    this.el = el;
    this.game = game;
    this.drawBoard(game.board)
    this.bindEvents();
  }

  drawBoard(board = this.game.board) {
    let html = "";
    for(let row = 0; row < 6; row++) {
      html += "<ul>"
      for(let col = 0; col < 7; col++) {
        html += `
          <li value='${col}' class='${board.get([row, col]) || ""}'>

          </li>
        `
      }
      html += '</ul>'
    }
    this.el.innerHTML = html;
  }

  bindEvents() {
    this.el.addEventListener('click', (e) => {
      let col = e.target.value
      this.game.turn(col)
      this.drawBoard()
    })
  }

}
