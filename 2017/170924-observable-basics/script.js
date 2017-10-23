window.onload = function() {
  const canvas = document.querySelector("canvas"),
    scoreTag = document.querySelector(".score");
  const ctx = canvas.getContext("2d"),
    snakeSize = 20;

  const Directions = {
    37: { x: -snakeSize, y: 0, ignore: 39 }, // Left Arrow
    39: { x: snakeSize, y: 0, ignore: 37 }, // Right Arrow
    38: { x: 0, y: -snakeSize, ignore: 40 }, // Up Arrow
    40: { x: 0, y: snakeSize, ignore: 38 } // Down Arrow
  };

  let snakeUnits = 3,
    fps = 10,
    score = 0,
    previousKeyCode,
    gameOver,
    gameTimeout,
    gameAnimationFrame,
    snakeArray = [{ x: 0, y: 0 }];

  init();

  function init() {
    if (!gameOver) {
      drawBackground();
      drawSnake();
      drawFood();
      gameTimeout = setTimeout(function() {
        gameAnimationFrame = window.requestAnimationFrame(init);
      }, 1000 / fps);
    }
  }

  function drawBackground() {
    ctx.fillStyle = "#50514F";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function drawFood() {
    ctx.fillStyle = "#FFE066";
    if (!snakeArray.food) {
      let x = getRandomIntInclusive(0, 34) * snakeSize,
        y = getRandomIntInclusive(0, 29) * snakeSize;
      snakeArray.food = { x, y };
    }
    ctx.fillRect(snakeArray.food.x, snakeArray.food.y, snakeSize, snakeSize);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function stopGame() {
    gameOver = true;
    clearTimeout(gameTimeout);
    window.cancelAnimationFrame(gameAnimationFrame);
    console.log("closed timers");
  }

  function checkSnakeSelfCollision() {
    let x = snakeArray[0].x,
      y = snakeArray[0].y;
    for (let i = 1; i < snakeArray.length; i++) {
      if (snakeArray[i].x === x && snakeArray[i].y === y) {
        stopGame();
        break;
      }
    }
  }

  function checkSnakeBorderCollision() {
    let x = snakeArray[0].x,
      y = snakeArray[0].y;
    if (
      x < 0 ||
      x > canvas.width - snakeSize ||
      y < 0 ||
      y > canvas.height - snakeSize
    ) {
      stopGame();
    }
  }

  function checkSnakeFoodCollision() {
    if (
      snakeArray.length &&
      snakeArray.food &&
      snakeArray[snakeArray.length - 1].x === snakeArray.food.x &&
      snakeArray[snakeArray.length - 1].y === snakeArray.food.y
    ) {
      snakeArray.food = undefined;
      snakeUnits++;
      fps++;
      score = score + fps + snakeUnits;
      scoreTag.innerHTML = "Score : " + score;
    }
  }

  function drawSnake() {
    ctx.fillStyle = "#F25F5C";
    if (previousKeyCode) {
      let newPosition = {
        x: snakeArray[0].x + Directions[previousKeyCode].x,
        y: snakeArray[0].y + Directions[previousKeyCode].y
      };
      snakeArray.unshift(newPosition);
      if (snakeArray.length > snakeUnits) {
        snakeArray.pop();
      }
    }
    checkSnakeFoodCollision();
    checkSnakeSelfCollision();
    checkSnakeBorderCollision();
    snakeArray.forEach(snakeUnit =>
      ctx.fillRect(snakeUnit.x, snakeUnit.y, snakeSize, snakeSize)
    );
  }

  Rx.Observable.fromEvent(document, "keydown").subscribe(event => {
    if (!previousKeyCode) {
      previousKeyCode = Directions[event.keyCode];
    }
    if (
      Directions[event.keyCode] &&
      Directions[event.keyCode].ignore != previousKeyCode &&
      event.keyCode !== previousKeyCode
    ) {
      previousKeyCode = event.keyCode;
      drawSnake();
    }
  });
};
