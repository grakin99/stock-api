/**
 * @param inputFieldSelector for custom css selector string (default: #ticker-id)
 *@method getInputValue returns the value of selected input field
  @export getInputValue for use in the get-data module to deliver the user inputted stock ticker
  @description userInput() Call this after the symbol= in the link https://www.alphavantage.co/query?function=GLOBAl_QUOTE&symbol=${userInput()}&apikey=7A6FRUARJTW7L8VY
 * */

function getInputValue(inputFieldSelector = "#ticker-id") {
  const userInputField = document.querySelector(inputFieldSelector);
  const input = userInputField?.value;
  return input;
}

export default getInputValue;
