import { register } from "../api/auth/register.mjs";

/**
 * Stores user input as an object when form is submitted
 */

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())

      //send to api 
      register(profile)
      
    })
  }


/*
  async function handleSubmit(evt) {
  evt.preventDefault()
  const form = evt.target;
  const formData = new FormData(form);
  const profile = Object.fromEntries(formData.entries()) 

  

  const name = profile["name"]
  const email = profile["email"];
  const password = profile["password"];
  if (email && password) {
    const result = await register(name, email, password)
    location.href = "/public/index.html";
   
  }
  console.log(profile)
}
*/