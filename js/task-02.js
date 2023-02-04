const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newIngredients = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

list.insertAdjacentHTML("afterbegin", newIngredients);
