function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);

createBtn.addEventListener("click", handleCreate);

function handleCreate() {
  const numberDiv = +inputEl.value;
  const minDiv = +inputEl.min;
  const maxDiv = +inputEl.max;
  let sizeDiv = 30;
  if (numberDiv >= minDiv && numberDiv <= maxDiv) {
    const listBoxes = [];
    for (let i = 1; i <= numberDiv; i++) {
      const divEl = document.createElement("div");
      divEl.style.width = sizeDiv + "px";
      divEl.style.height = sizeDiv + "px";
      divEl.style.backgroundColor = getRandomHexColor();
      sizeDiv += 10;
      listBoxes.push(divEl);
    }
    boxesEl.append(...listBoxes);
  }
  inputEl.value = "";
}

destroyBtn.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});

inputEl.classList.add("input-boxes");
createBtn.classList.add("btn", "btn-blue", "btn-create");
destroyBtn.classList.add("btn", "btn-red", "btn-create");
