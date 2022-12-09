import{API_AUCTION_URL} from "../apiURL.mjs";


const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerURL = API_AUCTION_URL + action;
    const body = JSON.stringify(profile)
    console.log(registerURL)
  const response = await fetch(registerURL, {
        headers: {
            "content-Type": "application/json"
        },
        method, /*: method, */
        body /*: body, */
    })
    
  const result = await response.json();
  alert("You are now registered")
  console.log(result);
  console.log(result.credits);
}
