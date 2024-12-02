function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", handlerChangeColor);

const bodyEl = document.querySelector("body");
const textColorEl = document.querySelector(".color");

function handlerChangeColor(event) {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  textColorEl.textContent = color;
}

btnEl.classList.add("btn", "btn-blue", "btn-color");
