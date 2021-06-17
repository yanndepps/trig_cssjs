const canvas = document.getElementById('canvas');
const dimensions = {
  width: 600 * window.devicePixelRatio,
  height: 600 * window.devicePixelRatio
};

canvas.width = dimensions.width;
canvas.height = dimensions.height;

const ctx = canvas.getContext('2d');
const size = canvas.width / 3;

const plotPoints = ( numberOfPoints = 30 ) => {
  const radius = size / 2;
  const angleStep = ( Math.PI * 2 ) / numberOfPoints;
  const xPos = canvas.width / 2;
  const yPos = canvas.height / 2;

  const points = [];

  for (let i = 1; i <= numberOfPoints; i++) {
    const radiusAtPoint = i % 2 === 0 ? radius : size;
    const x = xPos + Math.cos( i * angleStep ) * radiusAtPoint;
    const y = yPos + Math.sin( i * angleStep ) * radiusAtPoint;

    points.push({ x, y });
  }
  return points;
}

const draw = () => {
  // create the array of points
  const points = plotPoints();

  // move to starting position and plot the path
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  points.forEach(({ x, y }) => {
    ctx.lineTo(x, y);
  });

  ctx.closePath();

  // draw the line
  ctx.lineWidth = 3;
  ctx.stroke();
}

draw();
