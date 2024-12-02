const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", hundlerSubmit);
const user = {};

function hundlerSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
  } else {
    user.email = email;
    user.password = password;
    console.log(user);
    form.reset();
  }
}

const inputEl = document.querySelectorAll("input");
inputEl.forEach((item) => item.classList.add("form-input"));
const btnEl = document.querySelector("button");
btnEl.classList.add("btn", "btn-blue", "form-button");
