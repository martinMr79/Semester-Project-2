
import { load } from "../storage/storage.mjs";
import { API_AUCTION_URL } from "../api/apiURL.mjs";
import { authFetch } from "../api/auth/authFetch.mjs"

const action = "/profiles";
const author = "?_seller=true&_count=true&_bids=true&_listings=true";

console.log(load("profile"));
console.log(load("profile"));

export async function readProfile (name) {


    if(!name){
      throw new Error("Requires a name");
    }
  
    const profileURL = `${API_AUCTION_URL}${action}/${name}${author}`;
  
    const response = await authFetch (profileURL)
  
    if(response.ok){
      return await response.json();
    }
  
    throw new Error(response);
    
  }



export async function profileInfo() {
    const userName = document.querySelector("#userName");
    const userAvatar = document.querySelector(".userAvatar");
    const userCredits = document.querySelector(".credits");
    const userListings = document.querySelector(".nrListings");
    const userBids = document.querySelector(".userBids");
    const listingsContainer = document.querySelector(".listings");
    
    const { name, credits } = load("profile");
    const avatar = load("avatar");
    
    //User information 
    userName.innerText = name; 
    userAvatar.src = avatar; 
    userCredits.innerText = credits; 

 }

 profileInfo() 
