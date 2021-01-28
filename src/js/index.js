import data from "./data/get-data.js";

document.querySelector("#ticker-submit").addEventListener("click", () => {
  data();
});
