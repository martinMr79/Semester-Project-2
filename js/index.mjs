//import router from  "./router.mjs";

/*import * as listeners from "./handlers/index.mjs";

router(); */

import { setRegisterFormListener } from "./handlers/register.mjs";

setRegisterFormListener()

/* import { setLoginFormListener } from "./handlers/login.mjs"; */



/*
const path = location.pathname;

if (path === "/profile/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  listeners.setRegisterFormListener();
}


//post.removePost()
//
//post.getPost()
// post.getPosts().then(console.log);
*/