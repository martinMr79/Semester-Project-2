import { API_AUCTION_URL } from "../api/apiFetch.mjs";

const action = "/listings?limit=8";
const listingsCard = document.querySelector(".recentListings")

export async function getListings() {
  const updatePostURL = `${API_AUCTION_URL}${action}`;  
  const response = await fetch(updatePostURL)
  const listings = await response.json();

  console.log(listings)

  for (let i = 0; i < listings.length; i++) {
    listingsCard.innerHTML +=
  
  `<a href="details.html?id=${listings[i].id}">
  <div class= "card lg:card-side bg-base-200 shadow-xl gap-6 max-w-xs">
  <figure><img class="rounded-full" src="${listings[i].media[0]}" alt="Album"/></figure>
  <div class="card-body ">
  <h2 class="card-title">${listings[i].title}</h2>
  <p>${listings[i].tags}</p>
  <div class="card-actions justify-start">

  <p>description: ${listings[i].description}</p>

  <p>bid: ${listings[i].bids}</p>
  
  <p>bids: ${listings[i]._count.bids}</p>
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

/*


export async function getListing(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostURL = `${API_AUCTION_URL}${action}/${id}`;
  
  const response = await authFetch(getPostURL)

  return await response.json();
}

getListing()
console.log(getListing())


*/