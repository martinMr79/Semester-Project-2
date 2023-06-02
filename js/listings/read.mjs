import { API_AUCTION_URL } from "../api/apiURL.mjs";

const action = "/listings?_bids=true&limit=20";
const listingsCard = document.querySelector(".recentListings");

let currentPage = 1;  // Initial page
const limit = 20;     // Items per page

export async function getListings() {
  const action = `/listings?_bids=true&limit=${limit}&page=${currentPage}`;
  const updatePostURL = `${API_AUCTION_URL}${action}`;
  const response = await fetch(updatePostURL);
  const listings = await response.json();

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].media.length === 0) {
      listings[i].media =
        'https://www.freeiconspng.com/uploads/no-image-icon-4.png" width="100" alt="Simple No Png';
    }

    document.getElementById('loadMore').addEventListener('click', function() {
      currentPage += 1;
      getListings();
    });

    listingsCard.innerHTML += `<a href="details.html?id=${listings[i].id}" class="">
  <div class="card bg-slate-200 shadow-xl max-h-72">
  <figure class="bg-img w-full max-h-62"><img class="rounded-lg" src="${listings[i].media}" alt="Album"/></figure>
  <div class="card-body">
  <h2 class="card-title">${listings[i].title}</h2>
  <p>${listings[i].tags}</p>
  

  <p>Description: ${listings[i].description}</p>
  </div>
</div>
  </a>`;
  }
}
getListings();
