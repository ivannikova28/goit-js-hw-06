const inputValue = document.querySelector("#validation-input");

const valid = "valid"
const invalid = "invalid"
const addAction = "add";
const removeAction = "remove";

inputValue.addEventListener("blur", event => { 
    const { value, dataset } = event.currentTarget;

    if (value.length === +dataset.length) {
        // addClassList(inputValue, valid)
        // deleteClassList(inputValue, invalid)

        // inputValue.classList.add("valid")
        // inputValue.classList.remove("invalid")
        
        multiClassList(inputValue, addAction, valid)
        multiClassList(inputValue, removeAction, invalid)

    } else {
        // addClassList(inputValue, invalid)
        // deleteClassList(inputValue, valid)

        // inputValue.classList.add("invalid")
        // inputValue.classList.remove("valid")

        multiClassList(inputValue, addAction, invalid)
        multiClassList(inputValue, removeAction, valid)
    }

})


// function addClassList(element, className) {
//     element.classList.add(className)
// }

// function deleteClassList(element, className) {
//     element.classList.remove(className)
// }

function multiClassList(element, action, className) {
    element.classList[action](className)
}