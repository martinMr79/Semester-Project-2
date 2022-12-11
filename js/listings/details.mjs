import { API_AUCTION_URL } from "../api/apiURL.mjs";
import { authFetch } from "../api/auth/authFetch.mjs"


export async function getListing() {

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");
const action = "/listings";

const getListingURL = `${API_AUCTION_URL}${action}/${id}`;    
const response = await authFetch(getListingURL)
const listings = await response.json();

console.log(listings)
} 

  getListing()
  console.log(getListing())
  

/*const listingCard = document.querySelector(".listingDetails")

  async function createHTML() { 
    listingDetails.innerHTML += 
    `  <div class= "card lg:card-side bg-base-200 shadow-xl gap-10 max-w-sm">
    <figure><img class="rounded-full" src="${listings.media}" alt="Album"/></figure>
    <div class="card-body">
    <h2 class="card-title">${listings[i].title}</h2>
    <p>${listings[i].tags}</p>
    <div class="card-actions justify-start">
  
    <p>Description: ${listings[i].description}</p>`


  }


  createHTML()


*/