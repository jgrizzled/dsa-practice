const BST = require('../binary-tree/bst');
const sharePrices1 = [128, 97, 121, 123, 98, 97, 105];
const sharePrices2 = [10, 9, 8, 9, 10];

// returns [buyIndex, sellIndex, maxProfit]
const maxProfit = prices => {
  if (prices.length < 2) return null;
  let maxProfit = 0,
    min = 0,
    max = 0,
    localMin = 0;
  for (let i = 1; i < prices.length; i++) {
    const localProfit = prices[i] - prices[localMin];
    if (localProfit <= 0) localMin = i;
    else {
      const totalProfit = prices[i] - prices[min];
      if (localProfit > totalProfit && localProfit > maxProfit) {
        min = localMin;
        max = i;
        maxProfit = localProfit;
      } else if (totalProfit > maxProfit) {
        max = i;
        maxProfit = totalProfit;
      }
    }
  }

  return [min, max, maxProfit];
};

console.log(maxProfit(sharePrices1));
console.log(maxProfit(sharePrices2));
