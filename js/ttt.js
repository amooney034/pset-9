///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let table = document.getElementById("tableGyan")
var x_winner = document.getElementById("x_wins")
var o_winner = document.getElementById("o_wins")
var x_counter = 0;
var o_counter = 0;
var turn_counter;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init();
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init();
document.getElementById("x_turn").onclick = chooseTurnX
document.getElementById("o_turn").onclick = chooseTurnO
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];
  turn = "X";
  win = null;
  if (turn_counter == 1) {
    console.log("X")
    turn = "X"
  }
  else if (turn_counter == 0) {
    console.log("O")
    turn = "O"
  }
  render();
}

function render() {
  board.forEach(function(mark, ttt) {
    squares[ttt].textContent = mark;
  });
   if (win == "X") {
     console.log("x")
    x_counter++
  }
  else if (win == "O") {
    console.log("o")
    o_counter++
  }
  x_winner.innerHTML = x_counter
  o_winner.innerHTML = o_counter
  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();

      render();
    }
  }
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}

function chooseTurnX() {
  turn_counter = 1
  console.log("1")
}

function chooseTurnO() {
  turn_counter = 0
  console.log("0")
}
