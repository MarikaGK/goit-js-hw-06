const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fontSizeChange);
function fontSizeChange(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
