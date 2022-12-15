import { getListings } from "../listings/read.mjs";

const userSearchInput = document.getElementById("userSearchInput")
console.log(userSearchInput)

userSearchInput.addEventListener("keyup", handleInput);

export function handleInput(event) {
    const inputValue = event.currentTarget.value.toLowerCase();
    console.log(inputValue)

    const result = getListings.listings.filter((listings) => {
        if (listings.title.toLowerCase().startsWith(inputValue)) {
            return true;
        }

        console.log(result)
    })
}