//import router from  "./router.mjs";

/*import * as listeners from "./handlers/index.mjs";

router(); */

import { setRegisterFormListener } from "./handlers/register.mjs";

setRegisterFormListener()

import { setLoginFormListener } from "./handlers/login.mjs";

setLoginFormListener()


const path = location.pathname;

if (path === "/public/login/") {
  listeners.setLoginFormListener();
} else if (path === "/public/register/") {
  listeners.setRegisterFormListener();
}


//post.removePost()
//
//post.getPost()
// post.getPosts().then(console.log);
