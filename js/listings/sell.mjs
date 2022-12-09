import { API_AUCTION_URL } from "../api/apiURL.mjs";

import { authFetch } from "../api/auth/authFetch.mjs"

const action = "/listings";
const method = "post";

export async function sellItem(postData) {
  const sellItemURL = `${ API_AUCTION_URL}${action}`;
  
  const response = await authFetch(sellItemURL, {
    method,
    body: JSON.stringify(postData)
  })
  return await response.json();
}

