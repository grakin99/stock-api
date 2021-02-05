function parsedData(stockData) {
  this.Symbol = stockData["01. symbol"];
  this.Price = stockData["05. price"];
  this.Close = stockData["08. previous close"];
  this.Open = stockData["02. open"];
  this.High = stockData["03. high"];
  this.Low = stockData["03. low"];
  this.Date = stockData["07. latest trading day"];
  this.ChangePercent = stockData["09. change"];
}

export default parsedData;
