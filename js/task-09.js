function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector("button.change-color");
const body = document.querySelector("body");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
};

colorBtn.addEventListener("click", changeColor);
