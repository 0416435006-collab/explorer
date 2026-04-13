console.log("script started")

function processForm(event) {
    console.log("click");
    event.preventDefault();

    //get name input element
    let fNameInput = document.getElementById("firstname");
    let firstName = fNameInput.value;
    console.log(firstName);
}