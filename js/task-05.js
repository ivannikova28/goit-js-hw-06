const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const anonymous = "Anonymous"

nameInput.addEventListener("input", (event) => { 
    const { value } = event.target;

    
    nameOutput.textContent = value.trim();

    if (!nameOutput.textContent) {
        nameOutput.textContent = anonymous
    }
})