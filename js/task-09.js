const body = document.body
const changecolorBtn = document.querySelector(".change-color")
const spancolorText = document.querySelector(".color")

changecolorBtn.addEventListener("click", changeColor)

function changeColor(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  // spancolorText.innerText = randomColor
  spancolorText.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
