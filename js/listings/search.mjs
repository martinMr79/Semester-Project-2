//import { getListings } from "../listings/read.mjs";
import { API_AUCTION_URL } from "../api/apiURL.mjs";

const action = "/listings?_bids=true&limit=30";
const listingsCard = document.querySelector(".recentListings");

userSearchInput.addEventListener("keyup", handleInput);
console.log(userSearchInput);

export async function handleInput(event) {
  const inputValue = event.currentTarget.value.toLowerCase();
  listingsCard.innerHTML = ``;

  const updatePostURL = `${API_AUCTION_URL}${action}`;
  const response = await fetch(updatePostURL);
  const listings = await response.json();
  var result = [{}];
  result = listings.filter((listings) => {
    if (listings.title.toLowerCase().startsWith(inputValue)) {
      return true;
    }
  });
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    if (result[i].media.length === 0) {
      result[i].media =
        'https://www.freeiconspng.com/uploads/no-image-icon-4.png" width="100" alt="Simple No Png';
    }

    listingsCard.innerHTML += `<a href="details.html?id=${result[i].id}" class="">
      <div class="card bg-slate-200 shadow-xl max-h-72">
      <figure class="bg-img w-full max-h-62"><img class="rounded-lg" src="${result[i].media}" alt="Album"/></figure>
      <div class="card-body">
      <h2 class="card-title">${result[i].title}</h2>
      <p>${result[i].tags}</p>
      
    
      <p>Description: ${result[i].description}</p>
      </div>
      </div>
      </a>`;
  }
}
