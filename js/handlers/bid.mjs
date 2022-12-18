import { makeBid } from "../listings/make-bid.mjs";

export async function setMakeBidListener() {
  const form = document.querySelector("#bidForm");
  const input = document.querySelector("#floatingAmount");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const bidValue = input.value;
      const bid = {
        amount: Number(bidValue),
      };
      console.log("Bid value:" + bidValue);

      await makeBid(bid);
      input.value = bidValue;
      form.reset();
      location.reload();
    });
  }
}

setMakeBidListener();
