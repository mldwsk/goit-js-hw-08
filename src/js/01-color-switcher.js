function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorChanger () {
  document.body.style.backgroundColor = getRandomHexColor();
  timeout = setTimeout(colorChanger, 1000);
}

function startColors() {
  if (startButton.className === 'enabled') {
    startButton.className = 'disabled';
    stopButton.className = 'enabled';
    colorChanger();
  }
}

function stopColors() {
  if (stopButton.className === 'enabled') {
    startButton.className = 'enabled';
    stopButton.className = 'disabled';
    clearTimeout(timeout);
  }
}

let timeout;
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
startButton.className = 'enabled';
stopButton.className = 'disabled';
startButton.addEventListener('click', startColors);
stopButton.addEventListener('click', stopColors);