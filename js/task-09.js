function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector("button.change-color");
const body = document.querySelector("body");
const setSpan = document.querySelector(".color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  setSpan.textContent = body.style.backgroundColor;
};

colorBtn.addEventListener("click", changeColor);
