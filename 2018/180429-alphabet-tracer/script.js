window.onload = () => {
  const letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ],
    canvas = document.querySelector('canvas'),
    width = window.innerWidth,
    height = window.innerHeight,
    size = `28em`,
    ctx = canvas.getContext('2d');

  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', navigate);
  });

  let isDrawing,
    index = 0;

  canvas.width = width;
  canvas.height = height;

  init();

  function init() {
    drawBackground();
    drawOutline();
  }

  function drawBackground() {
    ctx.save();
    ctx.fillStyle = '#2C2A2B';
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }

  function drawOutline() {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#726d70';
    ctx.font = `${size} Chewy`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letters[index], width / 2, height / 2);
    ctx.restore();
  }

  canvas.onmousedown = start;
  canvas.onmousemove = move;
  canvas.onmouseup = end;

  canvas.addEventListener('touchstart', start);
  canvas.addEventListener('touchmove', move);
  canvas.addEventListener('touchend', end);

  function start(e) {
    e.preventDefault();
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(
      e.clientX || e.touches[0].pageX,
      e.clientY || e.touches[0].pageY
    );
  }

  function move(e) {
    e.preventDefault();
    if (isDrawing) {
      ctx.strokeStyle = '#FED05D';
      ctx.lineWidth = 20;
      ctx.lineCap = 'round';
      ctx.lineTo(
        e.clientX || e.touches[0].pageX,
        e.clientY || e.touches[0].pageY
      );
      ctx.stroke();
    }
  }

  function end(e) {
    e.preventDefault();
    isDrawing = false;
    ctx.closePath();
  }

  function navigate(event) {
    let direction = event.target.innerText;
    if (direction === '>>' && index < 25) {
      index++;
      init();
    } else if (direction === '<<' && index > 0) {
      index--;
      init();
    } else if (direction === 'clear') {
      init();
    }
  }
};
