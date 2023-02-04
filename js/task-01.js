const categories = document.querySelector("#categories");
const categoriesLength = categories.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const categoriesChildren = document.querySelectorAll("li.item");

for (const item of categoriesChildren) {
  const itemCategory = item.querySelector("h2");
  console.log(`Category: ${itemCategory.textContent}`);
  const itemList = item.querySelectorAll("li");
  console.log(`Elements: ${itemList.length}`);
}
