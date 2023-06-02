import { sellItem } from "../listings/sell.mjs";

/**
 * Stores user input as an object when form is submitted
 */

 export function setSellItemFormListener() {
  const form = document.querySelector("#sellItem");
  
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);

      const title = formData.get('title');
      const description = formData.get('description');
      const tags = formData.get('tags').split(', ');
      const media = formData.get('media').split(', ');
      const endsAt = formData.get('endsAt');

      const post = {title, description, tags, media, endsAt}

      //Delete the media if there is a empty string 
      if(post.media === ""){
        delete post.media
      }
      
      
      sellItem(post).then(console.log(post))
    })
  }
}