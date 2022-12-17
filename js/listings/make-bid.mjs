import { API_AUCTION_URL } from "../api/apiURL.mjs";
import { authFetch } from "../api/auth/authFetch.mjs";

/**
 * Makes a bid on a listing
 * @param {number} bidData represents the input information
 * @returns
 */
export async function makeBid(bidData) {
  debugger;
  const listId = localStorage.getItem("listId");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let id = urlParams.get("id");
  const action2 = "/listings";
  const author = "?_seller=true&_bids=true";
  const getListingURL = `${API_AUCTION_URL}${action2}/${id}${author}`;
  const response2 = await fetch(getListingURL);
  const listings = await response2.json();

  const action = `/listings/${id}/bids`;
  const method = "post";

  const makeBidUrl = `${API_AUCTION_URL}${action}`;

  const response = await authFetch(makeBidUrl, {
    method,
    body: JSON.stringify(bidData),
  });

  if (response.ok) {
    alert("You have made a bid!");
    return await response.json();
  } else {
    alert(
      "Something went wrong, please make sure your bid is equal to or lower then your credits"
    );
  }
}
