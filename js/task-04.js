let counterValue = 0;

const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const decVaule = () => {
  counterValue += Number(decBtn.textContent);
  value.innerHTML = counterValue;
};

const incVaule = () => {
  counterValue += Number(incBtn.textContent);
  value.innerHTML = counterValue;
};

decBtn.addEventListener("click", decVaule);

incBtn.addEventListener("click", incVaule);
