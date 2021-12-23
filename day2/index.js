//Day 2
export default function listGifts(letter) {
  return letter.split(" ")
    .filter((l) => !l.startsWith("_"))
    .filter(Boolean)
    .reduce((a, c) => ({
      ...a,
      [c]: !a[c] ? 1 : a[c] + 1,
    }), {});
}
