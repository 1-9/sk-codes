window.onload = function () {
  let canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    balls = [];

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  drawAll();

  function drawAll() {
    drawBackground();
    if (balls.length < 10) {
      createBall();
    }
    drawBall();
    window.requestAnimationFrame(drawAll);
  }

  function createBall() {
    balls.push({
      ballX: getRandomArbitrary(0, ctx.canvas.width),
      ballY: getRandomArbitrary(0, ctx.canvas.height),
      yDirection: "down",
      xDirection: "right",
      speed: getRandomArbitrary(1, 10)
    })
  }

  function drawBall() {
    balls.forEach(function (ball) {
      ballXDirection(ball);
      ballYDirection(ball);
      ball.xDirection === "left" ? (ball.ballX -= ball.speed) : (ball.ballX += ball.speed);
      ball.yDirection === "down" ? (ball.ballY += ball.speed) : (ball.ballY -= ball.speed);

      ctx.beginPath();
      ctx.fillStyle = "green";
      ctx.arc(ball.ballX, ball.ballY, 10, 0, 2 * Math.PI, true);
      ctx.fill();
    })
  }

  function ballXDirection(ball) {
    // if (ball.ballX > ctx.canvas.width - 10) {
    //   ball.xDirection = "left";
    // } else if (ball.ballX < 10) {
    //   ball.xDirection = "right";
    // }
  }


  function ballYDirection(ball) {
    if (ball.ballY > ctx.canvas.height - 10) {
      ball.yDirection = "up";
    } else if (ball.ballY < 10) {
      ball.yDirection = "down";
    }
  }

  function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
};
