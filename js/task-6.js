function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(".task-six-input");
const createButton = document.querySelector(".create-btn-task-six");
const destroyButton = document.querySelector(".destroy-btn-task-six");
const boxesContainer = document.querySelector(".boxes-container");

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
}
createButton.addEventListener("click", () => {
  const amount = Number(input.value.trim());

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  createBoxes(amount);

  input.value = "";
});

destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
  input.value = "";
});