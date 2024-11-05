function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changecolorbutton = document.querySelector(".change-color");
const colorspan = document.querySelector(".color");

changecolorbutton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = `rgb(${parseInt(
    newColor.slice(1, 3),
    16
  )}, ${parseInt(newColor.slice(3, 5), 16)}, ${parseInt(
    newColor.slice(5, 7),
    16
  )}`;
  сolorSpan.textContent = newColor;
});
