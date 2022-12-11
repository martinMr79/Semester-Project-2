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
  <div class= "card lg:card-side bg-base-200 shadow-xl gap-10 max-w-sm">
  <figure><img class="rounded-full" src="${listings[i].media}" alt="Album"/></figure>
  <div class="card-body">
  <h2 class="card-title">${listings[i].title}</h2>
  <p>${listings[i].tags}</p>
  <div class="card-actions justify-start">

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
  </div>
  </div>
  </a>`;
  }

  } 

 

/*<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div> */

/*
for (let i = 0; i < listings.length; i++) {
  listingsCard.innerHTML +=
`<a href="details.html?id=${listings[i].id}">
<h2>${listings[i].title}</h2>
<ul>
<li>description: ${listings[i].description}</li>
<li>Img: ${listings[i].media}</li>
<li>Tags: ${listings[i].tags}</li>

</ul>
</div>
</a>`;
}

*/

getListings()

