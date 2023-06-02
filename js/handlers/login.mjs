import { login } from "../api/auth/login.mjs";

/**
 * Stores user input as an object when form is submitted
 */


 export async function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

    if (form) {
    form.addEventListener("submit", (event) => {
    event.preventDefault()
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
      login(profile)

  })
}
}
