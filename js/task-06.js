const input = document.querySelector("input");
const dataLength = Number(input.getAttribute("data-length"));

console.log(input.getAttribute("id"));

input.addEventListener("blur", () => {
  if (input.value === "") {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  } else if (input.value.length <= dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
