//Day 9
export default function groupBy(collection, it) {
  return collection.reduce((a, c) => {
    const key = typeof it === "function" ? it(c) : c[it];
    (a[key] || (a[key] = [])).push(c);
    return a;
  }, {});
}
