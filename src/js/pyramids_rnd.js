const shapes = [...document.querySelectorAll('.shape')];
const button = document.querySelector('[data-btn]');

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const setAngles = () => {
  shapes.forEach((shape) => {
    const o = shape.clientWidth / 2;
    const h = getRandom(100, 450);
    const radians = Math.asin( o / h );

    shape.style.setProperty('--h', `${h}px`);
    shape.style.setProperty('--angle', `${radians}rad`);
  })
}

setAngles();

button.addEventListener('click', setAngles);
