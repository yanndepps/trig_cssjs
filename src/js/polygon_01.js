/*
 * Math.sin(θ) = opposite / hypotenuse
 * Math.cos(θ) = adjacent / hypotenuse
 * Math.tan(θ) = opposite / adjacent
 */

const shape = document.querySelector('.shape');

const plotPoints = ( radius, numberOfPoints ) => {
  // step used to place each point at equal distances
  const angleStep = ( Math.PI * 2 ) / numberOfPoints;

  // keep track of our points
  const points = [];

  for (let i = 1; i <= numberOfPoints; i++) {
    // x & y coordinates of the current point
    const x = Math.cos( i * angleStep ) * radius;
    const y = Math.sin( i * angleStep ) * radius;

    // push the point to the points array
    points.push({ x, y });
  }

  return points.map(({ x, y }) => {
    return `${x}px ${y}px`;
  }).join(',');
}

shape.style.setProperty('--clip', `polygon(${plotPoints(100, 8)})`);
