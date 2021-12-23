//Day 8
export default function maxProfit(prices) {
  let min = Infinity, max = -Infinity;
  let maxDiff = 0;
  for (const price of prices) {
    if (price < min) {
      min = price;
      max = -Infinity;
    }

    if (price > max) {
      max = price;
    }
    maxDiff = Math.max(maxDiff, max - min);
  }
  if (maxDiff === 0) {
    maxDiff = -1;
  }
  return maxDiff;
}
