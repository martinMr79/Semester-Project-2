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
`  <div class= "card lg:card-side bg-base-200 shadow-xl  max-h-sm">
<figure ><img class="rounded-full" src="${listings.media}" alt="Album"/></figure>
<div class="card-body">
<h1 class="card-title">${listings.title}</h1>
<p>${listings.tags}</p>
<div class="card-actions justify-start">
<p>bids: ${listings._count.bids}</p>
<p>Current bid:</p>
<p>Description: ${listings.description}</p>`


const listingTitle = document.querySelector(".listingTitle")
listingTitle.innerHTML += 
`<h2 class="card-title">${listings.title}</h2>`



} 

  getListing()
  



  async function createHTML() { 



  }


  createHTML()


