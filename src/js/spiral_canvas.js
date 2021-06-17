const canvas = document.getElementById('canvas');
const dimensions = {
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio
};

canvas.width = dimensions.width;
canvas.height = dimensions.height;

const ctx = canvas.getContext('2d');

const createPoints = ( numberOfPoints = 300 ) => {
  const angleStep = ( Math.PI * 10 ) / numberOfPoints;
  const xPos = canvas.width / 2;
  const yPos = canvas.height / 2;

  const points = [];

  for (let i = 1; i <= numberOfPoints; i++) {
    const radius = i * 2; // multiply the radius to get the spiral
    // const radius = Math.pow(i, 1.618); // multiply the radius to get the spiral
    const x = xPos + Math.cos( i * angleStep ) * radius;
    const y = yPos + Math.sin( i * angleStep ) * radius;

    points.push({ x, y });
  }
  return points;
}

const draw = () => {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 800, 800);

  const points = createPoints();

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  points.forEach(({ x, y }) => {
    ctx.lineTo(x, y);
  });

  ctx.lineWidth = 8;
  ctx.fill();
  ctx.stroke();
}

draw();
