const counterElemet = document.querySelector("#value")
const decrementBtn = document.querySelector("button[data-action='decrement']")
const incrementBtn = document.querySelector("button[data-action='increment']")

let counterValue = 0

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    insertTextToElement(counterElemet, counterValue)
    //counterElemet.textContent = counterValue
})
 
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    insertTextToElement(counterElemet, counterValue)
    //counterElemet.textContent = counterValue
 })


function insertTextToElement(element, text) {
    element.textContent = text
}