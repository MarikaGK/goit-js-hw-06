function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let boxCollection = [];

function createBoxes(amount) {
  let boxDimension = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxDimension}px`;
    newBox.style.height = `${boxDimension}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxCollection.push(newBox);
    boxDimension += 10;
  }
}

function addBoxes() {
  createBoxes(Number(input.value));
  boxesDiv.append(...boxCollection);
}

function destroyBoxes() {
  boxesDiv.textContent = "";
  boxCollection = [];
  input.value = "";
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("div#boxes");

createBtn.addEventListener("click", () => {
  addBoxes();
});

destroyBtn.addEventListener("click", destroyBoxes);
