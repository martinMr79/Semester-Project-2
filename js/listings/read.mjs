import { API_AUCTION_URL } from "../api/apiFetch.mjs";

const action = "/listings";

export async function getListings() {
  const updatePostURL = `${API_AUCTION_URL}${action}`;
   
  const response = await fetch(updatePostURL)

  return await response.json();
}

getListings()
console.log(getListings())

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