const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvasSize = () => {
  return {
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio
  };
};

const ressizeCanvas = () => {
  const { width, height } = canvasSize();
  canvas.width = width;
  canvas.height = height;
};

ressizeCanvas();

let tick = 0;
let rotation = 0;

const createPoint = (i, r) => {
  const angleStep = (Math.PI * 6) / 300;

  // center the spiral
  const xPos = canvas.width / 2;
  const yPos = canvas.height / 2;

  return {
    x: xPos + Math.cos(i * angleStep) * r,
    y: yPos + Math.sin(i * angleStep) * r
  };
};

const drawCircle = (tick, point) => {
  // hue
  const h = tick * 2; // 4
  const arcRatio = 0.25;

  // radius of the circle
  const radius = tick < 280 ? tick / 2 : 200;

  ctx.strokeStyle = `hsla(${h}, 70%, 50%)`;

  // inc line width, but set a min and max
  ctx.lineWidth = tick * 0.05 < 0.5 ? 0.5 : tick * 0.05 > 20 ? 20 : tick * 0.05;

  // draw the circles
  ctx.beginPath();
  ctx.arc(point.x, point.y, radius, 0, arcRatio * Math.PI);
  ctx.stroke();
}

let isIncrementing = true;

const draw = () => {
  window.requestAnimationFrame(draw);

  const { width, height } = canvas;

  // position
  const posFromCenter = Math.pow(tick, 1.18);
  const point = createPoint(rotation, posFromCenter);
  const point2 = createPoint(rotation + 150, posFromCenter);

  // clear canvas and redraw
  ctx.fillStyle = 'rgba(8, 8, 13, 0.05)';
  ctx.fillRect(0, 0, width, height);

  drawCircle(tick, point);
  drawCircle(tick, point2);

  if (tick < 150 && isIncrementing) {
    tick = tick + 0.5;
  }

  if (tick === 150 && isIncrementing) {
    isIncrementing = false;
  }

  if (tick === 0 && !isIncrementing) {
    isIncrementing = true;
  }

  if (tick > 0 && !isIncrementing) {
    tick = tick - 0.5;
  }

  rotation = rotation + 0.5;
}

window.addEventListener('resize', () => {
  ressizeCanvas();
});

// initial canvas backgroun
ctx.fillStyle = 'rgba(8, 8, 13, 1)';
ctx.fillRect(0, 0, canvas.width, canvas.height);

draw();
