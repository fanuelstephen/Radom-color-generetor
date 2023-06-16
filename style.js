const containerEL = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorCcontainerEl = document.createElement("div");
  colorCcontainerEl.classList.add("color-container");
  containerEL.appendChild(colorCcontainerEl);
}
const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();
function generateColors() {
  colorContainerEls.forEach((colorCcontainerEl) => {
    const newColorCode = randomColor();
    colorCcontainerEl.style.backgroundColor = "#" + newColorCode;
    colorCcontainerEl.innerHTML = "#" + newColorCode;
  });
}
function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = "6";
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
