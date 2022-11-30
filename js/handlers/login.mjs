/*import { login } from "/js/api/auth/login.mjs";

/**
 * Stores user input as an object when form is submitted
 */

/*
 export async function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", handleSubmit)
  }
}

async function handleSubmit(evt) {

  evt.preventDefault()
  const form = evt.target;
  const formData = new FormData(form);
  const profile = Object.fromEntries(formData.entries())
  
  const email = profile["email"];
  const password = profile["password"];

  if (email && password) {
    const result = await login(email, password)
    location.href = "/public/index.html";
   
  }

} */