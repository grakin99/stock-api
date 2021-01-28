/***
 * @method fetchData Calls the alphaVantage api using my personal key.
 * @export fetchData export for use in the index calling the function on a DOM event
 **/

import userInput from "./user-input";

function fetchData() {
  fetch(
    `https://www.alphavantage.co/query?function=GLOBAl_QUOTE&symbol=${userInput()}&apikey=7A6FRUARJTW7L8VY`
  )
    .then((data) => data.json())
    .then((data) => {
      console.log(data["Global Quote"]["01. symbol"]);
      return data["Global Quote"];
    })
    .catch((err) => {
      err = "Invalid Stock ticker";
      console.warn(err);
      return err;
    });
}
export default fetchData;
