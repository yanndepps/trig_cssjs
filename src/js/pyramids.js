const shape = document.querySelector('.shape');
const input = document.querySelector('[data-slider]');
const angleText = document.querySelector('[data-angle]');
const lengthText = document.querySelector('[data-length]');

const radToDeg = (radians) => {
  return radians * (180 / Math.PI);
};

const setAngles = () => {
  const o = shape.clientWidth / 2;
  const h = input.value;
  const radians = Math.asin( o / h );
  const angle = radToDeg(radians).toFixed(2);

  shape.style.setProperty('--h', `${h}px`);
  shape.style.setProperty('--angle', `${radians}rad`);
  angleText.innerText = `${angle}deg, ${radians.toFixed(2)}rad`;
  lengthText.innerText = `${h}px`;
}

setAngles();

input.addEventListener('input', setAngles);
