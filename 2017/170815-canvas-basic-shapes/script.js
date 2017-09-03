window.onload = function () {
  let canvas = document.createElement('canvas'),
    scoreElement = document.querySelector('.score'),
    ctx = canvas.getContext("2d"),
    ballR = 10,
    balls = [],
    paddles = [],
    xDirections = ['left', 'right'],
    yDirections = ['up', 'down'],
    score = 0,
    playGame;

  document.body.appendChild(canvas)
  ctx.canvas.width = window.innerWidth
  ctx.canvas.height = window.innerHeight

  drawAll()

  createBall(5)
  createPaddle()

  function drawAll() {
    let fps = 30
    drawBackground()
    drawBall()
    drawPaddle()

    setTimeout(() => {
      playGame = window.requestAnimationFrame(drawAll)
    }, 1000 / fps)
  }

  function randomDirection(coordinate) {
    return Math.random() < 0.5 ? coordinate === 'x' ? 'left' : 'up' : coordinate === 'x' ? 'right' : 'down'
  }

  function createBall(total) {
    for (let i = 0; i < total; i++) {
      balls.push({
        ballX: getRandomArbitrary(0, ctx.canvas.width),
        ballY: getRandomArbitrary(0, ctx.canvas.height),
        yDirection: randomDirection('y'),
        xDirection: randomDirection('x'),
        speed: getRandomArbitrary(0, 5)
      })
    }
  }

  function createPaddle() {
    paddles.push({
      paddleWidth: 20,
      paddleHeight: ctx.canvas.height / 8,
      paddleX: 0,
      paddleY: getRandomArbitrary(0, ctx.canvas.height - 100),
      speed: ctx.canvas.height / 8 * 0.5
    })
  }

  function drawBall() {
    balls.forEach(function (ball, index) {
      ballXDirection(ball, index)
      ballYDirection(ball)
      ball.speed += 0.005
      ball.xDirection === "left" ? (ball.ballX -= ball.speed) : (ball.ballX += ball.speed)
      ball.yDirection === "down" ? (ball.ballY += ball.speed) : (ball.ballY -= ball.speed)
      ctx.beginPath()
      ctx.fillStyle = "green"
      ctx.arc(ball.ballX, ball.ballY, ballR, 0, 2 * Math.PI, true)
      ctx.fill()
    })
  }

  document.addEventListener("keydown", function (event) {
    let paddle = paddles[0]
    if (paddle.paddleY > 0 && event.which === 75) {
      paddle.paddleY -= paddle.speed
    } else if (paddle.paddleY < ctx.canvas.height - paddle.paddleHeight && event.which === 74) {
      paddle.paddleY += paddle.speed
    }
  })

  function drawPaddle() {
    paddles.forEach(function (paddle) {
      ctx.beginPath()
      ctx.fillStyle = "indianred"
      ctx.rect(paddle.paddleX, paddle.paddleY, paddle.paddleWidth, paddle.paddleHeight)
      ctx.fill()
    })
  }

  function ballXDirection(ball, index) {
    let paddle = paddles[0]
    if (ball.ballX > ctx.canvas.width - ballR) {
      ball.xDirection = "left"
    } else if (ball.ballX < paddle.paddleWidth + ballR && ball.ballX > 0 &&
      paddle.paddleY < ball.ballY &&
      paddle.paddleY + paddle.paddleHeight > ball.ballY) {
      score += Math.round(ball.speed * 2);
      scoreElement.innerText = score;
      ball.xDirection = "right"
    } else if (ball.ballX < 0) {
      balls.splice(index, 1);
      if (!balls.length) {
        paddles = [];
        window.cancelAnimationFrame(playGame);
      }
    }
  }

  function ballYDirection(ball) {
    if (ball.ballY > ctx.canvas.height - ballR) {
      ball.yDirection = "up"
    } else if (ball.ballY < ballR) {
      ball.yDirection = "down"
    }
  }

  function drawBackground() {
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }
}
