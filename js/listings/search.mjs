const userSearchInput = document.getElementById("userSearchInput")
console.log(userSearchInput)

userSearchInput.addEventListener("keypress", handleInput);

function handleInput(event) {
    console.log("Press")
    console.log(event);
}