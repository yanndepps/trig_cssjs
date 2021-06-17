/*
 * Math.sin(θ) = opposite / hypotenuse
 * Math.cos(θ) = adjacent / hypotenuse
 * Math.tan(θ) = opposite / adjacent
 */

const shape = document.querySelector('.shape');

const plotPoints = ( radius, numberOfPoints ) => {
  // step used to place each point at equal distances
  const angleStep = ( Math.PI * 2 ) / numberOfPoints;

  // x and y pos to center the path
  const xPos = shape.clientWidth / 2;
  const yPos = shape.clientHeight / 2;

  // keep track of our points
  const points = [];

  for (let i = 1; i <= numberOfPoints; i++) {
    // for every other point, multiply by half the radius
    const radiusAtPoint = i % 2 === 0 ? radius * 0.5 : radius;

    // x & y coordinates of the current point
    const x = xPos + Math.cos( i * angleStep ) * radiusAtPoint;
    const y = yPos + Math.sin( i * angleStep ) * radiusAtPoint;

    // push the point to the points array
    points.push({ x, y });
  }

  return points.map(({ x, y }) => {
    return `${x}px ${y}px`;
  }).join(',');
}

shape.style.setProperty('--clip', `polygon(${plotPoints(100, 24)})`);
