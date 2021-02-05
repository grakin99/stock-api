/***
 * @param {String} userInput  input passed from the get-user-input.js module in string form in index.js
 * @method fetchData Calls the alphaVantage api using my personal key.
 **/
function fetchData(userInput) {
  if (userInput === null || userInput === undefined || userInput.length === 0) {
    return alert("invalid ticker");
  } else {
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
}
export default fetchData;
