function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberEl = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('#boxes');

function createBoxes(amount) {
  boxEl.innerHTML = '';
  const divBoxes = [];
  let sizeBoxes = 30; // Сброс размера блоков
  for (let i = 1; i <= amount; i++) {
    sizeBoxes += 10;
    const div = `<div class="new-box" style="background-color: ${getRandomHexColor()}; width: ${sizeBoxes}px; height: ${sizeBoxes}px;"></div>`;
    divBoxes.push(div);
  }
  boxEl.insertAdjacentHTML('beforeend', divBoxes.join(''));
}

btnCreate.addEventListener('click', () => {
  const amount = Number(numberEl.value);
  if (
    amount >= Number(numberEl.min) &&
    amount <= Number(numberEl.max) &&
    !isNaN(amount)
  ) {
    if (amount > 50) {
      alert('Too many boxes! Please enter a number up to 50.');
      return;
    }
    createBoxes(amount);
  } else {
    alert('Please enter a valid number between 1 and 100.');
  }
  numberEl.value = '';
});

const destroyBoxes = () => (boxEl.innerHTML = '');

btnDestroy.addEventListener('click', destroyBoxes);
