const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector('#text');

addStyle(spanText, "fontSize", inputRange.value + "px")
// spanText.style.fontSize = inputRange.value + "px";

inputRange.addEventListener("input", event => { 
    const { value } = event.currentTarget;
    addStyle(spanText, "fontSize", value + "px")
    // spanText.style.fontSize = value + "px";
})




function addStyle(element, styleName, styleValue) {
    element.style[styleName] = styleValue
}