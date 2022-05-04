const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.querySelectorAll('#color-palette div');
const firstColor = document.querySelector('#black');
const buttonClear = document.getElementById('clear-board');
const btnVqv = document.getElementById('generate-board');
const input = document.getElementById('board-size');

for (let index = 0; index < colorPalette.length; index += 1) {
  const red = Math.floor(Math.random() * 256); // referência da explicação do código utilizado https://www.w3schools.com/js/js_random.asp
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randonColor = `rgb(${red}, ${green}, ${blue})`;
  const element = colorPalette[index];
  element.style.backgroundColor = randonColor;
  firstColor.style.backgroundColor = 'black';
}

function setTheColor() {
  const selected = document.querySelector('.selected');
  // eslint-disable-next-line no-restricted-globals
  event.target.style.backgroundColor = selected.style.backgroundColor;
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

function limitBoard() {
  if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
}

btnVqv.addEventListener('click', () => {
  console.log(input.value);
  pixelBoard.innerText = '';
  if (input.value == '') {
    initialBoard();
    return alert('Board inválido!');
  }
  limitBoard();
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
    element.style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearBoard);
