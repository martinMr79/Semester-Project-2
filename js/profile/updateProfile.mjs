import { API_AUCTION_URL } from "../api/apiURL.mjs";
import { authFetch } from "../api/auth/authFetch.mjs"

const action = "/profiles";
const method = "PUT";

export async function updateProfile(profileData) {
  
  if (!profileData.name) {
    throw new Error("Name required");
  }

  const updateProfileURL = `${API_AUCTION_URL}${action}/${profileData.name}/media`;
  
  const response = await authFetch(updateProfileURL, {
    method, 
    body: JSON.stringify(profileData)
  })

  return await response.json();
}
