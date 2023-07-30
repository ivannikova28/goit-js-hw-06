
const form = document.querySelector(".login-form")


form.addEventListener("submit", handleSubmit)


function handleSubmit(event) {
    event.preventDefault();
    const currentTraget=  event.currentTarget;
    const { elements } = currentTraget;
    const { email, password } = elements;

    const emalValue = inputValue(email)
    const passwordValue = inputValue( password ) 

    if (!emalValue || !passwordValue) {
        alert("Please fill in all fields")
    } else {
        const formData = {
            email: emalValue,
            password: passwordValue
        }
        console.log(formData);
        currentTraget.reset();

    }

}


function inputValue(input) {
    return input?.value
}