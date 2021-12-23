//Day 16
export default function decodeNumbers(symbols) {
  const values = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  return symbols.split("").map((s) => values[s])
    .map((v, i, arr) => {
      if (i < arr.length && arr[i + 1] > v) v *= -1;
      return v;
    }).reduce((a, c) => a + c, 0);
}
