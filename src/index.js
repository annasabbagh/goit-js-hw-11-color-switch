const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

refs.startBtn.addEventListener('click', onStart);

let IntervalId;

function onStart() {
  refs.startBtn.disabled = true;
  refs.stopBtn.addEventListener('click', onStop);
  refs.startBtn.removeEventListener('click', onStart);

  IntervalId = setInterval(() => {
    let randomIndex = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[randomIndex];
  }, 1000);
}

function onStop() {
  clearInterval(IntervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.removeEventListener('click', onStop);
  refs.startBtn.addEventListener('click', onStart);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
