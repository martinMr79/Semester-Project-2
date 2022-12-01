import { login } from "../api/auth/login.mjs";

/**
 * Stores user input as an object when form is submitted
 */


 export async function setLoginFormListener() {
  const form = document.querySelector("#loginForm");


    form.addEventListener("submit", (event) => {
    event.preventDefault()
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())

      // send it to the API 
      login(profile)

  })

}

/*

  
  const email = profile["email"];
  const password = profile["password"];

  if (email && password) {
    const result = await login(email, password)
    location.href = "/public/index.html";
   
  }

} */