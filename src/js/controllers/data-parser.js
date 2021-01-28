import stockData from "../data/get-data.js";

const parsedData = {
  Symbol: (symbol = stockData["01. symbol"]) => symbol,
  Price: (price = stockData["05. price"]) => price,
  Close: (close = stockData["08. previous close"]) => close,
};
export default parsedData;
