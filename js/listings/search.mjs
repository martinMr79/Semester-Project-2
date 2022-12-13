

const userSearchInput = document.getElementById("userSearchInput")
console.log(userSearchInput)

userSearchInput.addEventListener("keyup", handleInput);

export function handleInput(event) {
    const inputValue = event.currentTarget.value;
    console.log(inputValue)
    const result = getListings.filter((getListings) => {
        console.log(getListings)
    })
}