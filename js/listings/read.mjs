import { API_AUCTION_URL } from "../api/apiURL.mjs";

const action = "/listings?_bids=true&limit=16";
const listingsCard = document.querySelector(".recentListings")

export async function getListings() {
  const updatePostURL = `${API_AUCTION_URL}${action}`;  
  const response = await fetch(updatePostURL)
  const listings = await response.json();

  console.log(listings)

  for (let i = 0; i < listings.length; i++) {
    listingsCard.innerHTML +=
  
  `<a href="details.html?id=${listings[i].id}" class="">
  <div class="card bg-red-100 shadow-xl max-h-72">
  <figure class="bg-img w-full max-h-62"><img class="rounded-lg" src="${listings[i].media}" alt="Album"/></figure>
  <div class="card-body">
  <h2 class="card-title">${listings[i].title}</h2>
  <p>${listings[i].tags}</p>
  

  <p>Description: ${listings[i].description}</p>
  </div>
</div>
  </a>`;

}
}
  getListings()

  /*
  if(listings[i].bids.length == 0){
    listingsCard.innerHTML +=
    `<p>Current bid: </p>`
  } else {
    listingsCard.innerHTML +=
    `<p>Current bid: ${listings[i].bids.reverse()[0].amount}</p>`
  }
  listingsCard.innerHTML +=
  `<p>bids: ${listings[i]._count.bids}</p>
;
  }

  } */

