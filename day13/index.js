//Day 13
export default function wrapGifts(gifts) {
  if (gifts.length === 0) return [];
  const topBottomWrap = "*".repeat(gifts[0].length);
  gifts.push(topBottomWrap);
  gifts.unshift(topBottomWrap);
  return gifts.map((g) => `*${g}*`);
}
