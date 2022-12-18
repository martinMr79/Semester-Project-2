import { load } from "../../storage/storage.mjs";

/**
 * Returns correct header
 * @returns token
 */

 export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
}

/**
 * Fetches the token
 * @param {string} url 
 * @param {object} options 
 * @returns 
 */

export async function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers()
  })
}