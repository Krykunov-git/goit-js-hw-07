const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.addEventListener("input", () => {
  let name = input.value.trim();
  if (name === "") {
    name = "Anonymous";
  }
  nameOutput.textContent = name;
});
