const pixelBoard = document.getElementById('pixel-board');

for (let index = 1; index <= 25; index += 1) {
  const pixels = document.createElement('div');
  pixels.className = 'pixel';
  pixelBoard.appendChild(pixels);
}


