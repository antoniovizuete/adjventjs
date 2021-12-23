//Day 11
export default function shouldBuyFidelity(times) {
  const normal = times * 12;
  const tarjeta = 250 + Array(times)
    .fill(0.75)
    .reduce((a, c, i) => a + (12 * Math.pow(c, i + 1)), 0);

  return tarjeta < normal;
}
