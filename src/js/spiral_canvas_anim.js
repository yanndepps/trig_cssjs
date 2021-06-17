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

const plotPoints = (numberOfPoints, rotation) => {
  // 6 rotations of the spiral divided by number of points
  const angleStep = (Math.PI * 10) / numberOfPoints;

  // center the spiral
  const Xpos = canvas.width / 2;
  const Ypos = canvas.height / 2;

  const points = [];

  for (let i = 1; i <= numberOfPoints; i++) {
    const r = Math.pow(i, 1.3);
    const x = Xpos + Math.cos(i * angleStep + rotation) * r;
    const y = Ypos + Math.sin(i * angleStep + rotation) * r;

    points.push({ x, y });
  }

  return points;
}

let rotation = 0;

const draw = () => {
  const { width, height } = canvas;

  // create points
  const points = plotPoints(300, rotation);

  // clear canvas and redraw
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // move to start pos
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  // plot lines
  points.forEach((point, i) => {
    ctx.lineTo(point.x, point.y);
  });

  // draw the stroke
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 10;
  ctx.stroke();

  // inc the rotation
  rotation -= 0.01;

  window.requestAnimationFrame(draw);
}

window.addEventListener('resize', () => {
  ressizeCanvas();
});

draw();
