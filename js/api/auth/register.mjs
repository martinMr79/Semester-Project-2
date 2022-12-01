import{API_AUCTION_URL} from "../apiFetch.mjs";


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
  console.log(result);
}

register()
console.log(register)