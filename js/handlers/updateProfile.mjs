
import { load, save } from "../storage/storage.mjs";
import { updateProfile } from "../profile/updateProfile.mjs";
import { readProfile, profileInfo   } from "../profile/profileData.mjs"

export async function setUpdateProfileListener() {  
  const form = document.querySelector("#editAvatar");
  

  
  if (form) {

    const { name } = load("profile")
    const avatar = load("avatar");
    const changeAvatarButton = form.querySelector("#change-avatar-button");
 
    const profile = await readProfile(name);
    
    userName.innerText = name;
    form.avatar.value = profile.avatar;
  
   

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())
      /*save("avatar", form.avatar.value); */
      
      profile.avatar = avatar; 
      profile.name = name;
      // Send it to the API
      updateProfile(profile)
      
    })
  }
} 



/*
import { updateProfile } from "../profile/updateProfile.mjs";
import { readProfile  } from "../profile/profileData.mjs"
import { load, save } from "../storage/storage.mjs";

const form = document.querySelector("#editAvatar"); */
/*const avatarImg = document.querySelector(".userAvatar");
const userName = document.querySelector("#userName");
const changeAvatarButton = document.querySelector("#change-avatar-button");

export async function setUpdateProfileListener() {
  
  if (form) {
    const { name } = load("profile")
    const avatar = load("avatar");
   

    userName.innerText = name;
    form.avatar.src = avatar;
  
    const profile = await readProfile(name);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const avatar = Object.fromEntries(formData.entries())
      save("avatar", form.avatar.value);
      
      // Send it to the API
      updateProfile(avatar)
      location.reload();
    })
  }
} */