
const inputNumber = document.querySelector("[type='number']")

const divBoxes = document.querySelector('#boxes')

const createBoxBtn = document.querySelector('[data-create]')
const destroyBoxBtn = document.querySelector('[data-destroy]')

createBoxBtn.addEventListener("click", function () { 
  let inputValue = +inputNumber.value;

  const {min, max } = inputNumber

  if (inputValue > max) {
    inputValue = max
  }

  if (inputValue < min) {
    inputValue = min
  }


  createBoxes(inputValue)
})



destroyBoxBtn.addEventListener("click", function () { 
  divBoxes.innerHTML = "";
  inputNumber.value = ""
})

function createBoxes(amount) {
  let sizeBox = 30;
  const sizeNextBox = 10;
  const divBoxHtml = []
 
  
  for (let i = 0; i < amount; i++) {
    const width = sizeBox + "px";
    const height = sizeBox + "px";
    const backgroundColor = getRandomHexColor();
    const style = `background-color:${backgroundColor}; width: ${width}; height: ${height};`

    const divHtml = `<div style="${style}"></div>`
    divBoxHtml.push(divHtml)
    sizeBox += sizeNextBox;
  }
  // divBoxes.innerHTML += divBoxHtml.join("")
  divBoxes.insertAdjacentHTML("beforeend", divBoxHtml.join(""))
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
