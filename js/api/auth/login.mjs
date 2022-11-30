/*import { API_AUCTION_URL } from "../apiFetch.mjs";
import * as storage from "../../storage/storage.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(email, password) {
  try {
    const loginURL = API_AUCTION_URL+ action;
    const body = JSON.stringify({
      email: email, 
      password: password,
    });

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: body,
    });

    const { accessToken, ...user } = await response.json();

    storage.save("token", accessToken);

    storage.save("profile", user);
    alert("You are now logged in")
  } catch (error) {
    console.log(error);
  }
}*/