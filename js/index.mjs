
import { setRegisterFormListener } from "./handlers/register.mjs";

setRegisterFormListener()

import { setLoginFormListener } from "./handlers/login.mjs";

setLoginFormListener()

export function form(){

  const path = location.pathname;

  if (path === "/public/login/") {
    listeners.setLoginFormListener();
  } else if (path === "/public/register/") {
    listeners.setRegisterFormListener();
  }

}

form()

