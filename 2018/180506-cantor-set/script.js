window.onload = () => {
  let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = '#dfe6e9';
  ctx.fillRect(0, 0, width, height);

  cantorSet(8);
  function cantorSet(
    level,
    x = 0,
    y = 0,
    width = window.innerWidth,
    height = window.innerHeight / level * 0.9
  ) {
    if (level > 0) {
      ctx.beginPath();
      ctx.strokeStyle = '#ff7675';
      ctx.fillStyle = '#00b894';
      ctx.lineWidth = level;
      ctx.fillRect(x, y, width, height);
      ctx.strokeRect(x, y, width, height);

      // left
      cantorSet(level - 1, x, y + height * 1.1, width / 3, height);
      // right
      cantorSet(
        level - 1,
        x + width * 2 / 3,
        y + height * 1.1,
        width / 3,
        height
      );
    }
  }
};
