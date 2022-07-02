// 1 Jul 2022
'use strict';
// -----------------------------------------------------

/*
[ 1, 2, 3, 4, 5, 6 ]        => 15  (buy at 1,2,3,4,5 and then sell all at 6)
[ 6, 5, 4, 3, 2, 1 ]        => 0   (nothing to buy for profit)
[ 1, 6, 5, 10, 8, 7 ]       => 18  (buy at 1,6,5 and sell all at 10)
[ 1, 2, 10, 3, 2, 7, 3, 2 ] => 26  (buy at 1,2 and sell them at 10. Then buy at 3,2 and sell them at 7)
*/

function getMostProfitFromStockQuotes(quotes) {
  // Sort the array to check the higher values
  const sortedArray = [...quotes].sort((a, b) => a - b);
  // Go through every stock price
  let entries = [];
  let total = 0;
  let maxValue;
  for (const quote of quotes) {
    // Check the sorted array to determine if you're buying or selling
    maxValue = sortedArray[sortedArray.length - 1];
    if (quote < maxValue) {
      // Buy
      entries.push(quote);
    } else if (maxValue === quote) {
      // Sell
      for (const entry of entries) {
        total += maxValue - entry;
      }
      // Pop value on sorted Array and flush entries
      entries = [];
      sortedArray.pop();
    }
  }
  return total;
}

console.log(getMostProfitFromStockQuotes([1, 2, 3, 4, 5, 6]));
console.log(getMostProfitFromStockQuotes([6, 5, 4, 3, 2, 1]));
console.log(getMostProfitFromStockQuotes([1, 6, 5, 10, 8, 7]));
console.log(getMostProfitFromStockQuotes([1, 2, 10, 3, 2, 7, 3, 2]));
// -----------------------------------------------------
