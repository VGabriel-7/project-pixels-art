const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.querySelectorAll('#color-palette div');
const buttonClear = document.getElementById('clear-board');
const btnVqv = document.getElementById('generate-board');

function setTheColor() {
  const selected = document.querySelector('.selected');
  // eslint-disable-next-line no-restricted-globals
  event.target.id = selected.id;
}

function initialBoard() {
  for (let index = 1; index <= 25; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixelBoard.appendChild(pixels);
    pixels.addEventListener('click', setTheColor);
  }
}

initialBoard();

btnVqv.addEventListener('click', () => {
  pixelBoard.innerText = '';
  const input = document.getElementById('board-size');
  if (input.value < 1) {
    initialBoard();
    return alert('Board inválido!');
  }
  pixelBoard.style.width = `${42 * input.value}px`;
  for (let index = 0; index < input.value * input.value; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';
    pixels.addEventListener('click', setTheColor);
    pixelBoard.appendChild(pixels);
  }
});

// const pixels = document.querySelectorAll('.pixel');

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

function clearBoard() {
  for (let index = 0; index < pixelBoard.childNodes.length; index += 1) {
    const element = pixelBoard.childNodes[index];
    element.id = 'white';
  }
}

buttonClear.addEventListener('click', clearBoard);
