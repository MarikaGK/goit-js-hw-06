const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    const alert = document.createElement("p");
    alert.textContent = "All form fields should be filled up!";
    form.append(alert);
  } else {
    const inputData = { email: email.value, password: password.value };
    console.log(inputData);
    event.currentTarget.reset();
  }
}
