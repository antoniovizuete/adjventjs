//Day 15
export default function checkSledJump(heights) {
  const derivative = (a, c, i, arr) => {
    if (i === 0) return [];
    const diff = c - arr[i - 1];
    return [...a, diff];
  };
  const diffs = heights.reduce(derivative, []);

  if (diffs.some((diff) => diff === 0)) return false; // Estancamiento
  if (diffs.every((diff) => diff > 0)) return false; // Solo sube
  if (diffs.every((diff) => diff < 0)) return false; // Solo baja

  for (const [i, diff] of diffs.entries()) {
    if (i === 0 && diff < 0) return false; // Empieza bajando
    if (i === 0) continue;
    if (diffs[i - 1] < 0 && diff > 0) return false; // Sube despues de bajar
  }

  return true;
}
