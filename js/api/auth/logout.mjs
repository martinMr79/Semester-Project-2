import { remove } from "../../storage/storage.mjs";

/**
 * Removes user data from local storage  
 *  
 */

export function logout() {
    const logOut = document.querySelector(".logout");

    logOut.addEventListener("click", () => {
        remove("token");
        remove("credits");
        remove("profile");
        window.location.assign("index.html");
    });
    
}

logout();

