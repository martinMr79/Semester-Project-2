
import { setRegisterFormListener } from "./handlers/register.mjs";
setRegisterFormListener()

import { setLoginFormListener } from "./handlers/login.mjs";
setLoginFormListener()

import { setSellItemFormListener } from "./handlers/sell.mjs";
setSellItemFormListener() 

import { setSellItemFormListener } from "./handlers/sell.mjs";
setUpdateProfileListener()

export function form(){

  const path = location.pathname;

  if (path === "/public/login/") {
    listeners.setLoginFormListener();
  } else if (path === "/public/register/") {
    listeners.setRegisterFormListener();
  }  else if (path === "/public/sell/") {
    listeners.setSellItemFormListener();
  } else if (path === "/public/profile/") {
    listeners.setUpdateProfileListener();
  } 

}

form()

