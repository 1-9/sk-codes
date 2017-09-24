window.onload = function () {
  let canvas = document.createElement('canvas'),
    height = window.innerHeight - 20,
    width = window.innerWidth - 20;

  document.body.appendChild(canvas);

  let ctx = canvas.getContext('2d'),
    snakeHeadPosition = [],
    oldSnakeHeadPosition = {},
    snakeBodyPosition = [],
    snakeFood = [],
    snakeHeight = 20,
    snakeWidth = 20,
    snakeSpeed = 1,
    snakeDirection = 'left',
    last, fps = 200,
    play;

  ctx.canvas.width = width;
  ctx.canvas.height = height;

  snakeHead();
  addBody(10);

  drawAll();

  function drawAll() {
    drawBackground();
    drawSnake();
    drawFood();
    if (snakeDirection) {
      move(snakeDirection);
    }
    setTimeout(function () {
      play = window.requestAnimationFrame(drawAll);
    }, fps)
  }

  function drawFood() {
    if (!snakeFood.length) {
      snakeFood.push({
        foodX: getRandomArbitrary(0, width),
        foodY: getRandomArbitrary(0, height)
      })
    }
    ctx.fillStyle = 'green';
    ctx.fillRect(snakeFood[0].foodX, snakeFood[0].foodY, snakeWidth, snakeHeight);
  }

  function drawBackground() {
    ctx.fillStyle = 'black';
    ctx.rect(0, 0, width, height);
    ctx.fill();
  }

  function snakeHead() {
    snakeHeadPosition.push({
      snakeX: getRandomArbitrary(0, width),
      snakeY: getRandomArbitrary(0, height)
    })
    last = {
      snakeX: snakeHeadPosition[0].snakeX,
      snakeY: snakeHeadPosition[0].snakeY
    }
  }

  function addBody(units) {
    while (units) {
      snakeBodyPosition.push({
        snakeX: last.snakeX + snakeWidth,
        snakeY: last.snakeY
      })

      last.snakeX += snakeWidth;
      units--;
    }
  }

  function drawSnake() {
    ctx.fillStyle = 'green';
    ctx.fillRect(snakeHeadPosition[0].snakeX, snakeHeadPosition[0].snakeY, snakeWidth, snakeHeight);
    for (let i = 0; i < snakeBodyPosition.length; i++) {
      ctx.fillRect(snakeBodyPosition[i].snakeX, snakeBodyPosition[i].snakeY, snakeWidth, snakeHeight);
    }
  }

  function move(direction) {
    oldSnakeHeadPosition.snakeX = snakeHeadPosition[0].snakeX;
    oldSnakeHeadPosition.snakeY = snakeHeadPosition[0].snakeY;

    if (snakeDirection) {
      if (direction === 'left' && snakeHeadPosition[0].snakeX > 0 && snakeDirection !== 'right') {
        snakeDirection = 'left'
        snakeHeadPosition[0].snakeX -= snakeWidth;
      } else if (direction === 'right' && snakeHeadPosition[0].snakeX < width - snakeWidth && snakeDirection !== 'left') {
        snakeDirection = 'right'
        snakeHeadPosition[0].snakeX += snakeWidth;
      } else if (direction === 'up' && snakeHeadPosition[0].snakeY > 0 && snakeDirection !== 'down') {
        snakeDirection = 'up'
        snakeHeadPosition[0].snakeY -= snakeHeight;
      } else if (direction === 'down' && snakeHeadPosition[0].snakeY < height - snakeHeight && snakeDirection !== 'up') {
        snakeDirection = 'down'
        snakeHeadPosition[0].snakeY += snakeHeight;
      }
      if (snakeDirection) {
        snakeBodyPosition.unshift({ snakeX: oldSnakeHeadPosition.snakeX, snakeY: oldSnakeHeadPosition.snakeY });
        snakeBodyPosition.pop();
      }
      snakeBodyPosition.forEach(function (bodyCell) {
        if (bodyCell.snakeX === snakeHeadPosition[0].snakeX && bodyCell.snakeY === snakeHeadPosition[0].snakeY) {
          snakeDirection = '';
        }
        window.cancelAnimationFrame(play);
      })
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.which === 39 && snakeDirection !== 'left' && snakeDirection !== 'right') {
      move('right');
    } else if (event.which === 37 && snakeDirection !== 'left' && snakeDirection !== 'right') {
      move('left');
    } else if (event.which === 38 && snakeDirection !== 'up' && snakeDirection !== 'down') {
      move('up');
    } else if (event.which === 40 && snakeDirection !== 'up' && snakeDirection !== 'down') {
      move('down');
    }
  })


  //   let pacManImg = new Image();
  //   pacManImg.src = "./images/pac-man.png";

  //   pacManImg.onload = function () {
  //     ctx.drawImage(pacManImg, 0, 0);
  //   }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }
}
