const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.querySelectorAll('#color-palette div');
const buttonClear = document.getElementById('clear-board');

for (let index = 1; index <= 25; index += 1) {
  const pixels = document.createElement('div');
  pixels.className = 'pixel';
  pixelBoard.appendChild(pixels);
}

const pixels = document.querySelectorAll('.pixel');

function selectedColor() {
  for (let index = 0; index < colorPalette.length; index += 1) {
    const element = colorPalette[index];
    element.className = 'color';
  }
  // eslint-disable-next-line no-restricted-globals
  event.target.className += ' selected';
}

for (let index = 0; index < colorPalette.length; index += 1) {
  const element = colorPalette[index];
  element.addEventListener('click', selectedColor);
}

function setTheColor() {
  const selected = document.querySelector('.selected');
  // eslint-disable-next-line no-restricted-globals
  event.target.id = selected.id;
}

for (let index = 0; index < pixels.length; index += 1) {
  const element = pixels[index];
  element.addEventListener('click', setTheColor);
}

function clearBoard() {
  for (let index = 0; index < pixelBoard.childNodes.length; index += 1) {
    const element = pixelBoard.childNodes[index];
    element.id = 'white';
  }
}

buttonClear.addEventListener('click', clearBoard);
