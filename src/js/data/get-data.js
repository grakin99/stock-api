/***
 * @method fetchData Calls the alphaVantage api using my personal key.
 * @param userInput  input passed from the get-user-input.js module in string form in index.js
 **/

import { createElement } from "../controllers/createElement";
import { addToDom } from "../utils/addToDom";

function fetchData(userInput) {
  return fetch(
    `https://www.alphavantage.co/query?function=GLOBAl_QUOTE&symbol=${userInput}&apikey=7A6FRUARJTW7L8VY`
  )
    .then((data) => {
      return data;
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data["Global Quote"];
    });
}
export default fetchData;
