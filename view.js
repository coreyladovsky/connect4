class View {
  constructor(el, game) {
    this.el = el;
    this.game = game;
    this.drawBoard(game.board)
    this.bindEvents();
    this.drawReset()
  }

  showTurn() {
    let div = document.querySelector("#showTurn") || document.createElement("div");
    div.id = "showTurn"
    div.innerHTML = "";
    let p = document.createElement("p");
    
    let circle = document.createElement("div");
    circle.classList.add(this.game.currentPlayer.sym)
    circle.classList.add("turnColor")
    
    if(this.game.isGameOver()) {
      p.innerText = "WINS!"
    } else {
      p.innerText = "its your turn"

    }
    
    div.appendChild(circle)
    div.appendChild(p)
    this.el.prepend(div);
  }

  drawReset(){
    let button = document.createElement("button");
    button.innerText = "Play Again?"
    button.addEventListener("click", () => {
    this.game.newGame();
    this.drawBoard();
    this.bindEvents();``
    })
    this.el.appendChild(button);
  }

  drawBoard(board = this.game.board) {
      this.showTurn();

    let html = "";
    html += "<div class='leg'><div class='foot'></div></div>"
    html += "<div>"
    for(let row = 0; row < 6; row++) {
      html += "<ul>"
      for(let col = 0; col < 7; col++) {
        let sym = board.get([row, col])
        if(sym) {
          sym += " " + sym + "-Disc"
        } else {
          sym = ""
        }
        html += `
        <li value='${col}' class='${sym}  col-${col}' data-row='${row}'>
        
        </li>
        `
      }
      html += '</ul>'
    }
    html += "</div>"
    html += "<div class='leg'></div>"
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
    let [row, column] = this.game.lastPlacement();
    // debugger
    let columns = document.querySelectorAll(`.col-${column}`)
      columns = [...columns]
      columns = columns.filter(el => {

        return el.dataset.row <= row
      })
    columns.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('r-Disc')   
        setTimeout(() => {
          el.classList.remove('r-Disc')
        }, 90) 
      }, i * 90) 
    })

    let disk = columns.pop();
    setTimeout(() => {
      disk.classList.add("r")
    }, columns.length * 90)

    // this.drawBoard()
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
