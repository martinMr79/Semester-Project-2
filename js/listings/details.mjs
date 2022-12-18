import { API_AUCTION_URL } from "../api/apiURL.mjs";

export async function getListing() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");
  const action = "/listings";
  const author = "?_seller=true&_bids=true";

  const getListingURL = `${API_AUCTION_URL}${action}/${id}${author}`;
  const response = await fetch(getListingURL);
  const listings = await response.json();

  console.log(listings);

  const listingTitle = document.querySelector(".listingTitle");
  listingTitle.innerHTML += `<title>${listings.title}</title>
<h1 class="text-3xl text-center mb-8">${listings.title}</h1>`;

  if (listings.media.length === 0) {
    listings.media =
      'https://www.freeiconspng.com/uploads/no-image-icon-4.png" width="350" alt="Simple No Png';
  }

  const listingDetails = document.querySelector(".listingDetails");
  listingDetails.innerHTML += `<div class= "flex flex-row">  
<div class= "card lg:card-side bg-base-200 shadow-xl max-w-sm">`;

  for (let i = 0; i < listings.media.length; i++) {
    listingDetails.innerHTML += `<figure class="items-center gap-4" style="display:inline-flex;"><img class="rounded" src="${listings.media[i]}" alt="Album" width="200" style="display:block"/></figure>`;
  }

  listingDetails.innerHTML += `<div class="card-body">
      <p>${listings.tags}</p>
      <p>Description: ${listings.description}</p>
    </div>
</div>


  <div class="ml-12 card-body border bg-slate-200 rounded-lg">
  <p>Number of bids: ${listings._count.bids}</p>
  <p>Auction ends at: ${
    listings.endsAt.slice(0, -14) + " " + listings.endsAt.slice(11, -8)
  }</p>
  <h2>Current bid: ${listings.bids.reverse()[0].amount} </h2>
  
  </div>
  
</div>
`;
}

getListing();
