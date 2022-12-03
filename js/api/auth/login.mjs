import { API_AUCTION_URL } from "../apiFetch.mjs";
import * as storage from "../../storage/storage.mjs"; 

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_AUCTION_URL+ action;
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body
    });

   const { accessToken, ...user } = await response.json(); 

    storage.save("token", accessToken);

    storage.save("profile", user);
    alert("You are now logged in")
   
    
    const result = await response.json()
    console.log(result)
}