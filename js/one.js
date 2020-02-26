var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext(2d);

var grid = [];

var height;
var width;
var margin; 
setDimensions();

const GRID_CIRCLE = 0.7;
const GRID_COLS = 7;
const GRID_ROWS = 6;
const MARGIN = 0.02;
const COLOR_BACKGROUND = "blue";
const COLOR_COMP = "red";
const COLOR_COMP_DRK = "darkred";
const COLOR_FRAME = "blue";
const 
class Cell {
  constructor(left, top, w, h, row, col) {
    this.bot = top + h;
    this.left = left;
    this.right = left + w;
    this.top = top;
    this.w = w;
    this.h = h;
    this.row = row;
    this.col = col;
    this.cx = left + w / 2;
    this.cy = left + h / 2;
    this.r = w * GRID_CIRCLE / 2;
    this.owner = null;
  }
  draw(/** @type {CanvasRenderingConetext2D} */ ctx) {
    let color = this.owner == null ? COLOR_BACKGROUND : this.owner ? COLOR_PLAY : COLOR_COMP;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.addEventListener("resize", setDimensions);
var timeDif;
var timeLast;
requestAnimationFrame(loop);

function loop(timeNow) {
  if (!timeLast) {
  timeLast = timeNow;
  }
  timeDif = (timeNow - timeLast) / 1000;
  timeLast = timeNow;
  
  drawBoard();
  
  requestAnimationFrame(loop);
}

function createBoard() {
  grid = [];
  
  let cell, marginX, marginY;
  
  if ((width - margin * 2) * GRID_ROWS / GRID_COLS < height - margin * 2) {
    cell = (width - margin * 2) / GRID_COLS;
    marginX = margin;
    marginY = (height - cell * GRID_ROWS) / 2;
}

  else {
    cell = (height - margin * 2) / GRID_ROWS);
    marginX = (width - cell * GRID_COLS) / 2;
    marginY = margin; 
  }
  for (let i = 0; i < GRID_ROWS; i++) {
    grid[i] = [];
    for (let j = 0; j < GRID_COLS; j++) {
      let left = marginX + j * cell;
      let top = marginY + i * cell;
      grid [i][j] = new Cell(left, top, cell, cell, i, j);
    }
}
}
  
function drawBoard() {
  ctx.fillStyle = COLOR_BACKGROUND;
  ctx.fillRect(0, 0, width, height);
}

function newGame() {
  createBoard();
}

function setDimensions() {
height = window.innerHeight;
width = window.innerWidth;
canvas.height = height;
canvas.width = width;
margin = MARGIN * Math.min(height, width);
newGame();
}
