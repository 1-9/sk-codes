// AAPL - 9:00 11,9:01 7, 9:02 5...
// returns 5 (buying for $5 and selling for $10)
const stockPricesYesterday = [11, 7, 5, 8, 10, 9];
getMaxProfit(stockPricesYesterday);

function getMaxProfit(prices) {
  return prices.reduce(
    (acc, val) => {
      acc.min = val < acc.min ? val : acc.min;
      acc.ans = val - acc.min > acc.ans ? val - acc.min : acc.ans;
      return acc;
    },
    { ans: 0, min: prices[0] }
  ).ans;
}

console.log(getMaxProfit(stockPricesYesterday));
