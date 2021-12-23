//Day 21
export default function canCarry(capacity, trip) {
  const planned = [
    ...trip.reduce((a, c) => [...a, [c[1], c[0]]], []),
    ...trip.reduce((a, c) => [...a, [c[2], -c[0]]], []),
  ].sort(([la, qa], [lb, qb]) => la - lb === 0 ? qa - qb : la - lb);

  let current = 0;
  for (const step of planned) {
    const [, q] = step;
    current += q;
    if (current > capacity) return false;
  }
  return true;
}
