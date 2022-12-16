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

const listingTitle = document.querySelector(".listingTitle")
listingTitle.innerHTML += 
`<title>${listings.title}</title>
<h1 class="card-title text-center mb-8">${listings.title}</h1>`

const listingDetails = document.querySelector(".listingDetails")
listingDetails.innerHTML += 
`  <div class= "card lg:card-side bg-base-200 shadow-xl max-w-sm max-h-sm">
<figure class="w-full max-h-42"><img class="rounded" src="${listings.media}" alt="Album"/></figure>
<div class="card-body">
<p>${listings.tags}</p>
<div class="card-actions justify-start">
<p>bids: ${listings._count.bids}</p>
<p>Current bid:</p>
<p>Description: ${listings.description}</p>
<button class="btn btn-success">Bid now</button>
</div>
</div>
</div>

<div>dfdfdf</div>
`






} 

  getListing()
  



  async function createHTML() { 



  }


  createHTML()


