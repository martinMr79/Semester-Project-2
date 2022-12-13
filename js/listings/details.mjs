import { API_AUCTION_URL } from "../api/apiURL.mjs";
import { authFetch } from "../api/auth/authFetch.mjs"


export async function getListing() {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");
const action = "/listings";

const getListingURL = `${API_AUCTION_URL}${action}/${id}`;    
const response = await fetch(getListingURL)
const listings = await response.json();

console.log(listings);

const listingDetails = document.querySelector(".listingDetails")
listingDetails.innerHTML += 
`  <div class= "card lg:card-side bg-base-200 shadow-xl gap-10 max-w-sm">
<figure><img class="rounded-full" src="${listings.media}" alt="Album"/></figure>
<div class="card-body">
<h2 class="card-title">${listings.title}</h2>
<p>${listings.tags}</p>
<div class="card-actions justify-start">
<p>bids: ${listings._count.bids}</p>
<p>Current bid:</p>
<p>Description: ${listings.description}</p>
<div class="card-actions">
<button class="btn btn-primary">Place bid</button>
</div>
`


} 

  getListing()
  



  async function createHTML() { 



  }


  createHTML()


