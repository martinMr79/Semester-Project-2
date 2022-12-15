
import { load, save } from "../storage/storage.mjs";
import { updateProfile } from "../profile/updateProfile.mjs";
import { readProfile, profileInfo   } from "../profile/profileData.mjs"

export async function setUpdateProfileListener() {  
  const form = document.querySelector("#editAvatar");
  

  
  if (form) {

    const { name } = load("profile")
    const avatar = load("avatar");
 
    const profile = await readProfile(name);
    
    userName.innerText = name;
    form.avatar.value = profile.avatar;
  
   

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())
      save("avatar", form.avatar.value); 
      
      profile.avatar = avatar; 
      profile.name = name;
      // Send it to the API
      updateProfile(profile)
      
    })
  }
} 

