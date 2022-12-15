import { API_AUCTION_URL } from "../api/apiURL.mjs";

const action = "/listings?_bids=true&limit=8";
const listingsCard = document.querySelector(".recentListings")

export async function getListings() {
  const updatePostURL = `${API_AUCTION_URL}${action}`;  
  const response = await fetch(updatePostURL)
  const listings = await response.json();

  console.log(listings)

  for (let i = 0; i < listings.length; i++) {
    listingsCard.innerHTML +=
  
  `<a href="details.html?id=${listings[i].id}">
  <div class= "card lg:card-side bg-blue-100 shadow-xl">
  <figure><img class="rounded-full " src="${listings[i].media}" alt="Album"/></figure>
  <div class="card-body">
  <h2 class="card-title">${listings[i].title}</h2>
  <p>${listings[i].tags}</p>
  

  <p>Description: ${listings[i].description}</p>`;

  
  if(listings[i].bids.length == 0){
    listingsCard.innerHTML +=
    `<p>Current bid: </p>`
  } else {
    listingsCard.innerHTML +=
    `<p>Current bid: ${listings[i].bids.reverse()[0].amount}</p>`
  }
  listingsCard.innerHTML +=
  `<p>bids: ${listings[i]._count.bids}</p>
</div>
</div>
  </a>`;
  }

  } 

getListings()

