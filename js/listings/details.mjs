import { API_AUCTION_URL } from "../api/apiURL.mjs";



export async function getListing() {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");
const action = "/listings";
const author = "?_seller=true&_bids=true"

const getListingURL = `${API_AUCTION_URL}${action}/${id}${author}`;    
const response = await fetch(getListingURL)
const listings = await response.json();



console.log(listings);

const listingTitle = document.querySelector(".listingTitle")
listingTitle.innerHTML += 
`<title>${listings.title}</title>
<h1 class="card-title text-center mb-8">${listings.title}</h1>`

const listingDetails = document.querySelector(".listingDetails")
listingDetails.innerHTML += 
`<div class= "flex flex-row">  
<div class= "card lg:card-side bg-base-200 shadow-xl max-w-sm">
  <figure class="w-full max-h-42"><img class="rounded" src="${listings.media}" alt="Album"/></figure>
    <div class="card-body">
      <p>${listings.tags}</p>
      <p>Description: ${listings.description}</p>
    </div>
</div>


  <div class="ml-12 card-body border bg-slate-200 rounded-lg">
  <p>Number of bids: ${listings._count.bids}</p>
  <p>Auction ends at: ${listings.endsAt}</p>
  <h2>Current bid: ${listings.bids.reverse()[0].amount} </h2>
  <input type="number" value="" class="input input-bordered ">
  <button class="btn btn-success">Bid now</button>
  </div>

</div>
`

/*
export const buildBidInfo = (data) => {

let body;
let amount = 0;

if (data.bids.length === 0) {
  body = errorMessage("No bids yet");
} else {
  const bidders = sortAmountAsc(data.bids);
  const dateFix = timeAgo(bidders[0].created);

  amount = bidders[0].amount;

  body = `
    <div class="flex flex-col gap-2 w-full">
      <h3 class="text-xl">Current bid</h3>
      <h4 class="text-lg font-semibold">${bidders[0].bidderName}</h3>
      <p>Amount: ${bidders[0].amount}</p>
      <p>${dateFix}</p>
    </div>`;

}
*/

} 
  
/*buildBidInfo()*/
  getListing()
  


