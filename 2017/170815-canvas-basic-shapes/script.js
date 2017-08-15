window.onload = function () {
  let canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    ballX = 100,
    ballY = 100;

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  let fps = 30;
  setInterval(drawAll, 1000 / fps);

  // updateAll();

  function drawAll() {
    drawBackground();
    drawBall();
  }

  function drawBall() {
    ballX += 5;
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(ballX, ballY, 10, 0, 2 * Math.PI, true);
    ctx.fill();
  }

  function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }
};
