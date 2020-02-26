var canvas = doucmnet.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext(2d);

var height;
var width;
setDimensions();

window.addEventListener("resize", setDimensions);
const COLOR_BACKGROUND = "blue"
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
newGame();
}
