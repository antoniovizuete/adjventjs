//Day 7
export default function contains(store, product) {
  return new RegExp(`"${product}"`, "g").test(JSON.stringify(store));
}
