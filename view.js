class View {
  constructor(el, game) {
    this.el = el;
    this.game = game;
    this.drawBoard(game.board)
    this.bindEvents();
    this.drawReset()
  }

  drawReset(){
    let button = document.createElement("button");
    button.innerText = "Play Again?"
    button.addEventListener("click", () => {
    this.game.newGame();
    this.drawBoard();
    })
    this.el.appendChild(button);
  }

  drawBoard(board = this.game.board) {
    let html = "";
    for(let row = 0; row < 6; row++) {
      html += "<ul>"
      for(let col = 0; col < 7; col++) {
        html += `
          <li value='${col}' class='${board.get([row, col]) || ""} col-${col}'>

          </li>
        `
      }
      html += '</ul>'
    }
    let div = document.querySelector("#gameBoard")
    if(!div) {
      div = document.createElement("div");
      div.id = "gameBoard";
      this.el.appendChild(div)
    }
    div.innerHTML = html
  }

  playGame = (e) => {
    if(e.target.tagName !== "LI") return
    let col = e.target.value
    this.game.turn(col)
    if(this.game.isGameOver()) {
      this.el.removeEventListener('click', this.playGame)
    }
    this.drawBoard()
  }

  showCol = (e) => {
    if(e.target.tagName === "DIV") {
      this.removePinks()
    }
    if(e.target.tagName !== "LI") return
    this.removePinks()
    let col = ".col-" + e.target.value;
    let collection = document.querySelectorAll(col);
    collection.forEach(el => {
      el.classList.add("showPink");
    })

  }

  removePinks() {
    document.querySelectorAll(".showPink").forEach(el => {
      el.classList.remove("showPink");
    })
  }

  bindEvents() {
    this.el.addEventListener('click', this.playGame)
    this.el.addEventListener('mouseover', this.showCol)

  }

}
